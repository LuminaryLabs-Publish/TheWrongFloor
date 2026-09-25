const clampByte=(v)=>Math.max(0,Math.min(255,Math.round(v)));
export function color(value, alpha=255){
  if(Array.isArray(value)) return [clampByte(value[0]),clampByte(value[1]),clampByte(value[2]),clampByte(value[3]??alpha)];
  const text=String(value).replace("#","");
  if(!/^[0-9a-fA-F]{6}$/.test(text)) throw new TypeError(`Invalid color: ${value}`);
  return [parseInt(text.slice(0,2),16),parseInt(text.slice(2,4),16),parseInt(text.slice(4,6),16),clampByte(alpha)];
}
export function createRasterSurface({width,height,transparent=true,background=null}){
  if(!Number.isInteger(width)||!Number.isInteger(height)||width<=0||height<=0) throw new TypeError("Raster surface requires positive integer dimensions.");
  const pixels=new Uint8Array(width*height*4);
  const surface={width,height,transparent,pixels,
    setPixel(x,y,rgba){ x=Math.round(x); y=Math.round(y); if(x<0||y<0||x>=width||y>=height)return false; const i=(y*width+x)*4; const c=color(rgba); pixels[i]=c[0];pixels[i+1]=c[1];pixels[i+2]=c[2];pixels[i+3]=c[3]; return true; },
    getPixel(x,y){ x=Math.round(x);y=Math.round(y); if(x<0||y<0||x>=width||y>=height)return [0,0,0,0]; const i=(y*width+x)*4; return [pixels[i],pixels[i+1],pixels[i+2],pixels[i+3]]; },
    clear(rgba=[0,0,0,0]){ const c=color(rgba); for(let i=0;i<pixels.length;i+=4){pixels[i]=c[0];pixels[i+1]=c[1];pixels[i+2]=c[2];pixels[i+3]=c[3];} }
  };
  if(background) surface.clear(background);
  return surface;
}
const B64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
export function bytesToBase64(bytes){ let out=""; for(let i=0;i<bytes.length;i+=3){ const a=bytes[i], b=i+1<bytes.length?bytes[i+1]:0, c=i+2<bytes.length?bytes[i+2]:0, n=(a<<16)|(b<<8)|c; out+=B64[(n>>>18)&63]+B64[(n>>>12)&63]+(i+1<bytes.length?B64[(n>>>6)&63]:"=")+(i+2<bytes.length?B64[n&63]:"="); } return out; }
export function base64ToBytes(text){ const clean=String(text).replace(/\s/g,""); const map=new Int16Array(128).fill(-1); for(let i=0;i<B64.length;i++) map[B64.charCodeAt(i)]=i; const out=[]; for(let i=0;i<clean.length;i+=4){ const a=map[clean.charCodeAt(i)], b=map[clean.charCodeAt(i+1)], c=clean[i+2]==="="?-1:map[clean.charCodeAt(i+2)], d=clean[i+3]==="="?-1:map[clean.charCodeAt(i+3)]; const n=(a<<18)|(b<<12)|((c<0?0:c)<<6)|(d<0?0:d); out.push((n>>>16)&255); if(c>=0)out.push((n>>>8)&255); if(d>=0)out.push(n&255); } return Uint8Array.from(out); }
export function imageFromSurface(surface){ return {width:surface.width,height:surface.height,pixelFormat:"rgba8",rgbaBase64:bytesToBase64(surface.pixels),transparent:surface.transparent,sampling:"nearest"}; }
export function surfaceFromImage(image){ const surface=createRasterSurface({width:image.width,height:image.height,transparent:image.transparent}); const bytes=base64ToBytes(image.rgbaBase64); if(bytes.length!==surface.pixels.length) throw new RangeError("Image pixel payload length does not match dimensions."); surface.pixels.set(bytes); return surface; }
