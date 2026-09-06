// Original elevator-door mark, rendered deterministically for native launchers.
import { writeFile, mkdir } from 'node:fs/promises';
import { deflateSync } from 'node:zlib';
const root = new URL('../desktop/icons/', import.meta.url); await mkdir(root, { recursive: true });
const table=Uint32Array.from({length:256},(_,n)=>{for(let k=0;k<8;k++)n=n&1?0xedb88320^n>>>1:n>>>1;return n>>>0;});
function chunk(type,data){const result=Buffer.alloc(data.length+12);result.writeUInt32BE(data.length);result.write(type,4);data.copy(result,8);let crc=0xffffffff;for(const b of result.subarray(4,-4))crc=table[(crc^b)&255]^crc>>>8;result.writeUInt32BE((crc^0xffffffff)>>>0,result.length-4);return result;}
function png(size){
  const data=Buffer.alloc((size*4+1)*size);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const u=x/size,v=y/size,i=y*(size*4+1)+1+x*4;
    let color=[15,22,20,255];
    if((u<.08||u>.92)&&(v<.08||v>.92))color=[0,0,0,0];
    if(u>.2&&u<.8&&v>.16&&v<.86)color=[81,87,72,255];
    if(u>.23&&u<.77&&v>.25&&v<.83)color=[226,112,72,255];
    if(u>.475&&u<.525&&v>.25&&v<.86)color=[7,13,12,255];
    if(u>.44&&u<.56&&v>.18&&v<.205)color=[226,112,72,255];
    if(v>.25&&v<.83&&Math.abs(u-.475-(v-.25)*.018)<.003)color=[244,191,131,255];
    for(let c=0;c<4;c++)data[i+c]=color[c];
  }
  const header=Buffer.alloc(13);header.writeUInt32BE(size);header.writeUInt32BE(size,4);header[8]=8;header[9]=6;
  return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',header),chunk('IDAT',deflateSync(data)),chunk('IEND',Buffer.alloc(0))]);
}
const sizes=[16,32,48,128,256], images=sizes.map(png), directory=Buffer.alloc(6+16*sizes.length);directory.writeUInt16LE(1,2);directory.writeUInt16LE(sizes.length,4);let offset=directory.length;
sizes.forEach((size,i)=>{const at=6+i*16;directory[at]=directory[at+1]=size===256?0:size;directory.writeUInt16LE(1,at+4);directory.writeUInt16LE(32,at+6);directory.writeUInt32LE(images[i].length,at+8);directory.writeUInt32LE(offset,at+12);offset+=images[i].length;});
await writeFile(new URL('wrong-floor.ico',root),Buffer.concat([directory,...images]));
await writeFile(new URL('wrong-floor.png',root),png(512));
const iconParts=[['ic07',128],['ic08',256],['ic09',512],['ic10',1024]].map(([type,size])=>{const image=png(size),head=Buffer.alloc(8);head.write(type);head.writeUInt32BE(image.length+8,4);return Buffer.concat([head,image]);});
const iconHead=Buffer.alloc(8);iconHead.write('icns');iconHead.writeUInt32BE(8+iconParts.reduce((sum,b)=>sum+b.length,0),4);
await writeFile(new URL('wrong-floor.icns',root),Buffer.concat([iconHead,...iconParts]));
console.log('[branding] native PNG, ICO, and ICNS icons rendered');
