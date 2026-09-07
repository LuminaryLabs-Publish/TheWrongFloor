"""Isolated Blender conversion of the approved Unburied; preserves source files."""
import bpy, bmesh, json, math, time, traceback, sys
from pathlib import Path
from mathutils import Vector
from mathutils.bvhtree import BVHTree
import numpy as np

ROOT=Path(__file__).resolve().parents[1]
WORK=ROOT/'_review/characters/unburied';WORK.mkdir(parents=True,exist_ok=True)
SOURCE=Path(sys.argv[sys.argv.index('--')+1])
def progress(stage,**kw):
    (WORK/'progress.json').write_text(json.dumps(dict(stage=stage,**kw),indent=2))
sys.excepthook=lambda k,v,t:(WORK/'error.txt').write_text(''.join(traceback.format_exception(k,v,t)))
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=str(SOURCE))
s=bpy.context.scene;rig=next(o for o in s.objects if o.type=='ARMATURE')
objects=[o for o in s.objects if o.type=='MESH' and any(m.type=='ARMATURE' for m in o.modifiers)]
rig.data.pose_position='REST';s.frame_set(1)
for o in objects:
    for m in o.modifiers:m.show_viewport=m.show_render=False
def activate(o):
    bpy.ops.object.select_all(action='DESELECT');o.hide_set(False);o.select_set(True);bpy.context.view_layer.objects.active=o
def bary(p,a,b,c):
    u=b-a;v=c-a;w=p-a;aa=u.dot(u);bb=u.dot(v);cc=v.dot(v);dd=w.dot(u);ee=w.dot(v);det=aa*cc-bb*bb
    if abs(det)<1e-20:return [1,0,0]
    y=(cc*dd-bb*ee)/det;z=(aa*ee-bb*dd)/det
    values=[max(0,1-y-z),max(0,y),max(0,z)];total=sum(values);return [x/total for x in values]
source_count=0
for o in objects:o.data.calc_loop_triangles();source_count+=len(o.data.loop_triangles)
reports=[]
for o in objects:
    # Preserve full finger/knuckle topology and small exposed skeletal pieces.
    if not o.name.startswith(('BODY','HEAD')):continue
    progress('Quad retopology',object=o.name)
    group_names=[g.name for g in o.vertex_groups]
    old=o.data.copy();old.calc_loop_triangles();tris=[tuple(t.vertices) for t in old.loop_triangles]
    tree=BVHTree.FromPolygons([v.co for v in old.vertices],tris,all_triangles=True)
    high=o.copy();high.data=old;s.collection.objects.link(high);high.name='HIGH '+o.name
    for m in list(high.modifiers):high.modifiers.remove(m)
    high.parent=None;high.matrix_world=o.matrix_world.copy()
    temp=bpy.data.objects.new('Quad input',old.copy());s.collection.objects.link(temp);activate(temp)
    bm=bmesh.new();bm.from_mesh(temp.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001)
    bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces));bm.to_mesh(temp.data);bm.free()
    # Repair tiny boolean junctions for a watertight remesher input only.
    mod=temp.modifiers.new('Manifold input','REMESH');mod.mode='VOXEL';mod.voxel_size=.0015 if o.name.startswith('HEAD') else .003
    bpy.ops.object.modifier_apply(modifier=mod.name)
    for v in temp.data.vertices:v.co*=1000
    temp.data.update()
    status=bpy.ops.object.quadriflow_remesh(mode='FACES',target_faces=6000 if o.name.startswith('HEAD') else 16000,use_mesh_symmetry=False,use_preserve_sharp=False,use_preserve_boundary=True,seed=41)
    if 'FINISHED' not in status:raise RuntimeError(str(status))
    coords=[];maps=[];distances=[]
    for v in temp.data.vertices:
        pos=v.co/1000;q,n,i,d=tree.find_nearest(pos);ids=tris[i]
        coords.append(q);maps.append(list(zip(ids,bary(q,*[old.vertices[j].co for j in ids]))));distances.append(d)
    mesh=bpy.data.meshes.new(o.name+' retopology');mesh.from_pydata(coords,[],[tuple(p.vertices) for p in temp.data.polygons]);mesh.update()
    bpy.data.objects.remove(temp,do_unlink=True);o.data=mesh
    o.vertex_groups.clear()
    for name in group_names:o.vertex_groups.new(name=name)
    for i,mp in enumerate(maps):
        weights={}
        for j,w in mp:
            for g in old.vertices[j].groups:weights[g.group]=weights.get(g.group,0)+w*g.weight
        keep=sorted(weights.items(),key=lambda x:-x[1])[:4];total=sum(w for g,w in keep)
        if total<=0:raise RuntimeError('Unweighted vertex')
        for g,w in keep:o.vertex_groups[g].add([i],w/total,'REPLACE')
    for p in mesh.polygons:p.use_smooth=True
    activate(o);bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.uv.smart_project(angle_limit=math.radians(65),island_margin=.012);bpy.ops.object.mode_set(mode='OBJECT')
    material=bpy.data.materials.new(o.name+' baked');material.use_nodes=True;mesh.materials.append(material)
    bs=material.node_tree.nodes.get('Principled BSDF');bs.inputs['Roughness'].default_value=.65
    node=material.node_tree.nodes.new('ShaderNodeTexImage');material.node_tree.nodes.active=node
    s.render.engine='CYCLES';s.cycles.samples=1;s.cycles.device='CPU'
    for ob in objects:ob.hide_render=True
    high.hide_render=False;o.hide_render=False
    saved=[]
    for mat in high.data.materials:
        if not mat or not mat.use_nodes:continue
        out=next(n for n in mat.node_tree.nodes if n.type=='OUTPUT_MATERIAL');saved.append((mat,out,out.inputs['Surface'].links[0].from_socket))
    progress('Bake paired textures',object=o.name)
    for kind in ['BaseColor','Normal','Roughness']:
        size=2048;im=bpy.data.images.new(o.name[:4]+'_'+kind,width=size,height=size,alpha=True)
        im.generated_color=(.5,.5,1,0) if kind=='Normal' else (0,0,0,0)
        im.colorspace_settings.name='sRGB' if kind=='BaseColor' else 'Non-Color';node.image=im
        emissions=[]
        if kind!='Normal':
            for mat,out,original in saved:
                principled=next((n for n in mat.node_tree.nodes if n.type=='BSDF_PRINCIPLED'),None)
                if not principled:continue
                sock=principled.inputs['Base Color' if kind=='BaseColor' else 'Roughness'];em=mat.node_tree.nodes.new('ShaderNodeEmission');emissions.append((mat,em))
                if sock.is_linked:mat.node_tree.links.new(sock.links[0].from_socket,em.inputs['Color'])
                else:
                    val=sock.default_value;em.inputs['Color'].default_value=val if kind=='BaseColor' else (val,val,val,1)
                mat.node_tree.links.new(em.outputs[0],out.inputs['Surface'])
        activate(o);high.select_set(True)
        bpy.ops.object.bake(type='NORMAL' if kind=='Normal' else 'EMIT',use_selected_to_active=True,use_clear=True,margin=16,cage_extrusion=.025,max_ray_distance=.06)
        for mat,out,original in saved:mat.node_tree.links.new(original,out.inputs['Surface'])
        for mat,em in emissions:mat.node_tree.nodes.remove(em)
        arr=np.empty(len(im.pixels),np.float32);im.pixels.foreach_get(arr);arr=arr.reshape(size,size,4);valid=arr[:,:,3]>.5
        # Pad neighbouring UV texels; keep original valid texels unchanged.
        for _ in range(20):
            for dy,dx in [(1,0),(-1,0),(0,1),(0,-1)]:
                ys=slice(max(0,dy),size+min(0,dy));xs=slice(max(0,dx),size+min(0,dx));yn=slice(max(0,-dy),size+min(0,-dy));xn=slice(max(0,-dx),size+min(0,-dx))
                mask=(~valid[ys,xs])&valid[yn,xn];arr[ys,xs][mask]=arr[yn,xn][mask];valid[ys,xs][mask]=True
        im.pixels.foreach_set(arr.ravel());im.filepath_raw=str(WORK/(o.name[:4]+'_'+kind+'.png'));im.file_format='PNG';im.save();im.pack()
        tx=material.node_tree.nodes.new('ShaderNodeTexImage');tx.image=im
        if kind=='Normal':
            nm=material.node_tree.nodes.new('ShaderNodeNormalMap');material.node_tree.links.new(tx.outputs['Color'],nm.inputs['Color']);material.node_tree.links.new(nm.outputs['Normal'],bs.inputs['Normal'])
        else:material.node_tree.links.new(tx.outputs['Color'],bs.inputs['Base Color' if kind=='BaseColor' else kind])
    material.node_tree.nodes.remove(node);high.hide_render=True;high.hide_set(True)
    mesh.calc_loop_triangles();reports.append(dict(object=o.name,source_triangles=len(tris),triangles=len(mesh.loop_triangles),max_projection_m=max(distances),method='QuadriFlow, surface projection, skin transfer, paired PBR bake'))
    bpy.ops.wm.save_as_mainfile(filepath=str(WORK/'checkpoint.blend'))
for o in objects:
    o.hide_set(False);o.hide_render=False
    for m in o.modifiers:m.show_viewport=m.show_render=True
rig.data.pose_position='POSE';s.frame_set(1)
activate(rig)
for o in objects:o.select_set(True)
for track in rig.animation_data.nla_tracks:track.mute=False
out=ROOT/'game/assets/characters/unburied.glb'
progress('Exporting')
bpy.ops.export_scene.gltf(filepath=str(out),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=True,export_animation_mode='NLA_TRACKS',export_force_sampling=True,export_skins=True,export_yup=True)
bpy.ops.wm.save_as_mainfile(filepath=str(WORK/'The_Unburied_Retopologized.blend'))
(WORK/'complete.json').write_text(json.dumps(dict(source=str(SOURCE),source_triangles=source_count,changed=reports,output=str(out)),indent=2))
progress('Complete')
