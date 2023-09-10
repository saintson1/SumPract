import { units } from "./unit.js";
import { ubo_buffer } from "../res/buffer.js";
import { matr4 } from "../../../mth/mth.js";

class _animation {
  constructor() {
    this.units = units();
  }
  draw() {
    for (let i = 0; i < this.units.unitsArray.length; i++) {
      if (window.topologyState == i) {
        if (this.units.unitsArray[i].prim.shd.prog.then == undefined) {
          if (this.units.unitsArray[i].drawType == undefined)
            this.units.unitsArray[i].drawType = gl.TRIANGLE_STRIP;
          if (this.units.unitsArray[i].offset == undefined)
            this.units.unitsArray[i].offset = 0;

          this.units.unitsArray[i].response();
          this.uboMatrixResponse(i);

          this.units.unitsArray[i].prim.vertex_buffer.apply();
          this.units.unitsArray[i].prim.index_buffer.apply();
          if (this.units.unitsArray[i].ubo != undefined)
            this.units.unitsArray[i].ubo.apply();
          gl.useProgram(this.units.unitsArray[i].prim.shd.prog);
          gl.drawElements(
            this.units.unitsArray[i].drawType,
            this.units.unitsArray[i].prim.numOfVertex,
            gl.UNSIGNED_SHORT,
            this.units.unitsArray[i].offset
          );
        }
      }
    }
  }

  init() {
    this.units.init();

    for (let i = 0; i < this.units.unitsArray.length; i++) {
      this.units.unitsArray[i].init();

      this.units.unitsArray[i].prim.shd.prog.then(() => {
        // Matrix ubo init
        this.uboMatrix = ubo_buffer(
          this.units.unitsArray[i].prim.shd.prog,
          "Matrixes",
          0,

          new Float32Array([
            ...matr4().toArray(), // matrVP
            ...matr4().toArray(), // matrW
            ...matr4().toArray(), // matrWInv
            ...matr4().toArray(), // matrWVP
          ])
        );
      });
    }
  }

  uboMatrixResponse(num) {
    let unit = this.units.unitsArray[num];
    let uboMatrixArray = [];
    let matrVP = [],
      matrW = [],
      matrWInv = [],
      matrWVP = [];

    matrVP = camera.matrVP.toArray();
    uboMatrixArray.push(...matrVP);

    matrW = unit.matrW.toArray();
    uboMatrixArray.push(...matrW);

    matrWInv = unit.matrW.inverse().toArray();
    uboMatrixArray.push(...matr4().toArray());

    unit.matrW = matr4(matrW);
    matrWVP = matr4(unit.matrW.m).mulMatr(matr4(matrVP)).toArray();
    uboMatrixArray.push(...matrWVP);

    uboMatrixArray = new Float32Array(uboMatrixArray);

    this.uboMatrix.update(uboMatrixArray);
    /* ---------------------------------------------------------------- */
  }
}

export function animation(...arg) {
  return new _animation(...arg);
}
