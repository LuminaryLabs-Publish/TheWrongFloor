function concat(parts){const size=parts.reduce((n,p)=>n+p.length,0),out=new Uint8Array(size);let offset=0;for(const part of parts){out.set(part,offset);offset+=part.length;}return out;}
function u32(n){return Uint8Array.of((n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255);}
let CRC_TABLE=null;function crcTable(){if(CRC_TABLE)return CRC_TABLE;CRC_TABLE=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=(c&1)?0xedb88320^(c>>>1):c>>>1;CRC_TABLE[n]=c>>>0;}return CRC_TABLE;}
function crc32(bytes){let c=0xffffffff,t=crcTable();for(const b of bytes)c=t[(c^b)&255]^(c>>>8);return(c^0xffffffff)>>>0;}
function ascii(text){return Uint8Array.from([...text].map((c)=>c.charCodeAt(0)));}
function chunk(type,data){const t=ascii(type),body=concat([t,data]);return concat([u32(data.length),body,u32(crc32(body))]);}
function adler32(data){let a=1,b=0;for(const byte of data){a=(a+byte)%65521;b=(b+a)%65521;}return((b<<16)|a)>>>0;}
function deflateStored(data){const parts=[Uint8Array.of(0x78,0x01)];let offset=0;while(offset<data.length){const len=Math.min(65535,data.length-offset),final=offset+len>=data.length?1:0,nlen=(~len)&0xffff;parts.push(Uint8Array.of(final,len&255,(len>>>8)&255,nlen&255,(nlen>>>8)&255));parts.push(data.subarray(offset,offset+len));offset+=len;}parts.push(u32(adler32(data)));return concat(parts);}
export function encodePngRgba(surface,{scale=1}={}){
  const s=Math.max(1,Math.floor(scale)),w=surface.width*s,h=surface.height*s,row=w*4+1,raw=new Uint8Array(row*h);let o=0;
  for(let y=0;y<h;y++){raw[o++]=0;const sy=Math.floor(y/s);for(let x=0;x<w;x++){const sx=Math.floor(x/s),i=(sy*surface.width+sx)*4;raw[o++]=surface.pixels[i];raw[o++]=surface.pixels[i+1];raw[o++]=surface.pixels[i+2];raw[o++]=surface.pixels[i+3];}}
  const ihdr=concat([u32(w),u32(h),Uint8Array.of(8,6,0,0,0)]),signature=Uint8Array.of(137,80,78,71,13,10,26,10);
  return concat([signature,chunk("IHDR",ihdr),chunk("IDAT",deflateStored(raw)),chunk("IEND",new Uint8Array())]);
}
