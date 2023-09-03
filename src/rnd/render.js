import { animation } from "./anim/animation.js";
import { camera } from "../../mth/mth.js";

class _render {
  anim;
  constructor() {
    this.anim = animation();
  }
  draw() {
    this.anim.draw();
  }

  response() {
    //
  }

  start() {
    gl.clearColor(1, 1, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    //camera.set([1, 2, 8], );
  }

  init() {
    const canvas = document.getElementById("glCanvas");
    window.gl = canvas.getContext("webgl2");

    this.anim.init();
    window.camera = camera();
  }

  close() {
    // Windows work
  }
}

export function render(...arg) {
  return new _render(...arg);
}
