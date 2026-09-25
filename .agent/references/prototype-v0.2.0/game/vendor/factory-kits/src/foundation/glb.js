import { base64ToBytes } from "./raster/surface.js";
import { encodePngRgba } from "./raster/png.js";

function pad4(value){return(value+3)&~3;}
function minMaxPositions(positions){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(let i=0;i<positions.length;i+=3)for(let c=0;c<3;c++){min[c]=Math.min(min[c],positions[i+c]);max[c]=Math.max(max[c],positions[i+c]);}return{min,max};}
function wrapValue(value){return value==="clamp"?33071:value==="mirror"?33648:10497;}
function colorFactor(source){return source.baseColorFactor??source.baseColor??[.7,.7,.7,1];}

export function exportArtifactGlb(artifact){
  const chunks=[],bufferViews=[],accessors=[],meshes=[],nodes=[];let byteOffset=0;
  function appendBytes(bytes,target){const padded=pad4(bytes.byteLength),copy=new Uint8Array(padded);copy.set(bytes);const viewIndex=bufferViews.length;const view={buffer:0,byteOffset,byteLength:bytes.byteLength};if(target)view.target=target;bufferViews.push(view);chunks.push(copy);byteOffset+=padded;return viewIndex;}
  function appendTypedArray(array,target){return appendBytes(new Uint8Array(array.buffer,array.byteOffset,array.byteLength),target);}
  function accessor(values,size,type,{componentType=5126,target=34962,minmax=false}={}){
    const typed=componentType===5125?new Uint32Array(values):new Float32Array(values),viewIndex=appendTypedArray(typed,target),record={bufferView:viewIndex,componentType,count:typed.length/size,type};
    if(minmax){const bounds=minMaxPositions(values);record.min=bounds.min;record.max=bounds.max;}
    const index=accessors.length;accessors.push(record);return index;
  }

  const textureEntries=Object.entries(artifact.textures??{}),images=[],samplers=[],textures=[];
  const textureIndex=new Map();
  for(const [id,source] of textureEntries){
    const pixels=base64ToBytes(source.rgbaBase64),expected=source.width*source.height*4;
    if(pixels.length!==expected)throw new RangeError(`Texture ${id} payload length does not match dimensions.`);
    const png=encodePngRgba({width:source.width,height:source.height,pixels},{scale:1}),imageView=appendBytes(png),imageIndex=images.length;
    images.push({name:id,mimeType:"image/png",bufferView:imageView,extras:{colorSpace:source.colorSpace??"linear"}});
    const samplerIndex=samplers.length;samplers.push({magFilter:9729,minFilter:9987,wrapS:wrapValue(source.wrapS),wrapT:wrapValue(source.wrapT)});
    const index=textures.length;textures.push({name:id,source:imageIndex,sampler:samplerIndex});textureIndex.set(id,index);
  }

  const materialIds=Object.keys(artifact.materials??{}),materialIndex=new Map(materialIds.map((id,index)=>[id,index])),extensionsUsed=new Set();
  const materials=materialIds.map((id)=>{
    const source=artifact.materials[id]??{},pbr={baseColorFactor:colorFactor(source),metallicFactor:source.metallicFactor??source.metallic??0,roughnessFactor:source.roughnessFactor??source.roughness??.7};
    if(source.baseColorTexture&&textureIndex.has(source.baseColorTexture))pbr.baseColorTexture={index:textureIndex.get(source.baseColorTexture)};
    if(source.metallicRoughnessTexture&&textureIndex.has(source.metallicRoughnessTexture))pbr.metallicRoughnessTexture={index:textureIndex.get(source.metallicRoughnessTexture)};
    const material={name:id,pbrMetallicRoughness:pbr,emissiveFactor:source.emissiveFactor??source.emissive??[0,0,0],alphaMode:source.alphaMode??"OPAQUE",doubleSided:source.doubleSided===true,extras:{kind:source.kind??"generic",subsurface:source.subsurface??0,customTransmission:source.transmission??0,thickness:source.thickness??0,ior:source.ior??1.33}};
    if(material.alphaMode==="MASK")material.alphaCutoff=source.alphaCutoff??.5;
    if(source.normalTexture&&textureIndex.has(source.normalTexture))material.normalTexture={index:textureIndex.get(source.normalTexture),scale:source.normalScale??1};
    if(source.occlusionTexture&&textureIndex.has(source.occlusionTexture))material.occlusionTexture={index:textureIndex.get(source.occlusionTexture),strength:source.occlusionStrength??1};
    if(source.emissiveTexture&&textureIndex.has(source.emissiveTexture))material.emissiveTexture={index:textureIndex.get(source.emissiveTexture)};
    const extensions={};
    if((source.clearcoat??0)>0||(source.clearcoatRoughness??0)>0){extensionsUsed.add("KHR_materials_clearcoat");extensions.KHR_materials_clearcoat={clearcoatFactor:source.clearcoat??0,clearcoatRoughnessFactor:source.clearcoatRoughness??0};}
    if((source.iridescence??0)>0){extensionsUsed.add("KHR_materials_iridescence");extensions.KHR_materials_iridescence={iridescenceFactor:source.iridescence,iridescenceIor:1.3};}
    if((source.transmission??0)>0){extensionsUsed.add("KHR_materials_transmission");extensions.KHR_materials_transmission={transmissionFactor:source.transmission};}
    if(Object.keys(extensions).length)material.extensions=extensions;
    return material;
  });

  for(const source of artifact.meshes){
    const attrs={POSITION:accessor(source.positions,3,"VEC3",{minmax:true})};
    if((source.normals?.length??0)===source.positions.length)attrs.NORMAL=accessor(source.normals,3,"VEC3");
    if((source.uvs?.length??0)===source.positions.length/3*2)attrs.TEXCOORD_0=accessor(source.uvs,2,"VEC2");
    if((source.tangents?.length??0)===source.positions.length/3*4)attrs.TANGENT=accessor(source.tangents,4,"VEC4");
    if(source.colors?.length){const size=source.colors.length===source.positions.length?3:4;attrs.COLOR_0=accessor(source.colors,size,size===3?"VEC3":"VEC4");}
    const maxIndex=source.indices.reduce((maximum,value)=>Math.max(maximum,value),0),componentType=maxIndex<65535?5123:5125;
    const typed=componentType===5123?new Uint16Array(source.indices):new Uint32Array(source.indices),indexView=appendTypedArray(typed,34963),indexAccessor=accessors.length;
    accessors.push({bufferView:indexView,componentType,count:typed.length,type:"SCALAR"});
    const primitive={attributes:attrs,indices:indexAccessor,material:materialIndex.get(source.material)??0,extras:{transparent:source.transparent===true,doubleSided:source.doubleSided===true,...(source.extras??{})}};
    const meshIndex=meshes.length;meshes.push({name:source.id,primitives:[primitive]});nodes.push({name:source.id,mesh:meshIndex,extras:source.extras??undefined});
  }

  const rootIndex=nodes.length;nodes.push({name:"Artifact_Root",children:nodes.map((_,index)=>index),extras:artifact.metadata??{}});
  const binary=new Uint8Array(byteOffset);let cursor=0;for(const chunk of chunks){binary.set(chunk,cursor);cursor+=chunk.byteLength;}
  const gltf={asset:{version:"2.0",generator:"NexusFactory-Kits",extras:{sourceSeed:artifact.seed,sourceDefinition:artifact.metadata?.sourceDefinition??artifact.params}},scene:0,scenes:[{name:artifact.metadata?.generator??artifact.kitId,nodes:[rootIndex]}],nodes,meshes,materials,buffers:[{byteLength:binary.byteLength}],bufferViews,accessors,extras:{kitId:artifact.kitId,seed:artifact.seed,deterministicHash:artifact.deterministicHash,metadata:artifact.metadata}};
  if(images.length){gltf.images=images;gltf.samplers=samplers;gltf.textures=textures;}
  if(extensionsUsed.size)gltf.extensionsUsed=[...extensionsUsed].sort();
  const encoder=new TextEncoder(),jsonRaw=encoder.encode(JSON.stringify(gltf)),jsonLength=pad4(jsonRaw.byteLength),json=new Uint8Array(jsonLength);json.fill(0x20);json.set(jsonRaw);
  const totalLength=12+8+json.byteLength+8+binary.byteLength,out=new Uint8Array(totalLength),view=new DataView(out.buffer);view.setUint32(0,0x46546c67,true);view.setUint32(4,2,true);view.setUint32(8,totalLength,true);view.setUint32(12,json.byteLength,true);view.setUint32(16,0x4e4f534a,true);out.set(json,20);const binHeader=20+json.byteLength;view.setUint32(binHeader,binary.byteLength,true);view.setUint32(binHeader+4,0x004e4942,true);out.set(binary,binHeader+8);return out;
}
