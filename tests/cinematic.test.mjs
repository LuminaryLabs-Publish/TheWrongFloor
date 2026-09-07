import test from 'node:test';
import assert from 'node:assert/strict';
import {introPose,INTRO_FPS,INTRO_SECONDS} from '../game/src/cinematic.mjs';
test('studio credit fades in and out before the final menu crossfade',()=>{
 assert.equal(INTRO_FPS,30);assert.equal(INTRO_SECONDS,40);
 assert.equal(introPose(0).credit,0);assert.ok(introPose(4).credit>0&&introPose(4).credit<1);assert.equal(introPose(6).credit,1);assert.ok(introPose(11).credit>0&&introPose(11).credit<1);assert.equal(introPose(13).credit,0);
 assert.equal(introPose(38).fade,0);assert.ok(Math.abs(introPose(39.4).fade-.5)<1e-10);assert.equal(introPose(40).fade,1);assert.equal(introPose(40).done,true);
});
