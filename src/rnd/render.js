import { animation } from "./anim/animation.js";
import { camera } from "../../mth/mth.js";

class _render {
  anim;
  constructor() {
    this.anim = animation();
  }
  draw() {
    document.querySelector("#button0").onclick = () => {
      window.topologyState = 0;
    };
    document.querySelector("#button1").onclick = () => {
      window.topologyState = 1;
    };
    document.querySelector("#button2").onclick = () => {
      window.topologyState = 2;
    };
    document.querySelector("#button3").onclick = () => {
      window.topologyState = 3;
    };
    document.querySelector("#button4").onclick = () => {
      window.topologyState = 4;
    };

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
