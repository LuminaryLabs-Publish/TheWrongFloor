import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import electronPath from 'electron';

const here=path.dirname(fileURLToPath(import.meta.url));
const output=path.resolve(here,'../_review/native');
const child=spawn(electronPath,['.generated/app','--smoke-test'],{
  cwd:here,
  stdio:'inherit',
  windowsHide:true,
  env:{...process.env,WRONG_FLOOR_SMOKE_OUTPUT:output}
});
const code=await new Promise((resolve,reject)=>{child.once('error',reject);child.once('exit',code=>resolve(code??1));});
if(code!==0)process.exit(code);
