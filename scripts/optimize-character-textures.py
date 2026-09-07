"""Create offline runtime GLBs with bounded embedded texture resolution.
Geometry, skinning and animation buffer views are copied byte-for-byte.
"""
import io,json,struct,sys,hashlib
from pathlib import Path
from PIL import Image

def optimize(source,destination,max_size=1024):
    raw=Path(source).read_bytes();length=struct.unpack_from('<I',raw,12)[0]
    doc=json.loads(raw[20:20+length]);binary=raw[28+length:];replacements={}
    images=[]
    for im in doc.get('images',[]):
        view=doc['bufferViews'][im['bufferView']];offset=view.get('byteOffset',0)
        image=Image.open(io.BytesIO(binary[offset:offset+view['byteLength']]))
        before=image.size
        if max(image.size)>max_size:
            image.thumbnail((max_size,max_size),Image.Resampling.LANCZOS)
            output=io.BytesIO();image.save(output,format='PNG',optimize=True)
            replacements[im['bufferView']]=output.getvalue();im['mimeType']='image/png'
        images.append(dict(before=before,after=image.size))
    chunks=[];offset=0
    for i,v in enumerate(doc['bufferViews']):
        old=v.get('byteOffset',0);data=replacements.get(i,binary[old:old+v['byteLength']])
        v['byteOffset']=offset;v['byteLength']=len(data);chunks.append(data);offset+=len(data)
        padding=(-offset)%4;chunks.append(b'\0'*padding);offset+=padding
    binary=b''.join(chunks);doc['buffers'][0]['byteLength']=len(binary)
    text=json.dumps(doc,separators=(',',':'),ensure_ascii=True).encode();text+=b' '*((-len(text))%4)
    result=struct.pack('<III',0x46546c67,2,28+len(text)+len(binary))+struct.pack('<II',len(text),0x4e4f534a)+text+struct.pack('<II',len(binary),0x004e4942)+binary
    Path(destination).write_bytes(result)
    return dict(source=str(source),destination=str(destination),source_sha256=hashlib.sha256(raw).hexdigest(),sha256=hashlib.sha256(result).hexdigest(),source_bytes=len(raw),bytes=len(result),images=images)

if __name__=='__main__':
    report=optimize(sys.argv[1],sys.argv[2]);print(json.dumps(report))
