import { primitive, ubo_buffer } from "../res/resurses.js";
import { matr4, vec3 } from "../../../mth/mth.js";

///////
///tetrahedron
///////
class tetrahedron {
  init() {
    let pos = [
      [0, 1.1031550730555824, 0],
      [0, 0, 0.7800484328579435],
      [-0.675541759037219, 0, -0.3900242164289717],
      [0.675541759037219, 0, -0.3900242164289717],
    ];

    const ind = [0, 2, 1, 0, 3, 2, 0, 1, 3, 3, 1, 2];

    this.prim = primitive("Platonth", ind, pos);
    this.matrW = matr4();
    this.drawType = gl.TRIANGLES;
  }

  response() {
    let time;

    let date = new Date();
    time = date.getSeconds() * 1000 + date.getMilliseconds();

    let matrR = matr4();
    matrR.mulMatr(matr4().scale(vec3(0.9)));

    matrR.mulMatr(matr4().rotate(Math.sin(time * 0.001) * 0.1, vec3(0, 1, 0)));
    this.matrW = matrR;
  }
}

///////
///octahedron
///////
class octahedron {
  init() {
    let pos = [
      [0.5, 0, 0.5],
      [-0.5, 0, 0.5],
      [-0.5, 0, -0.5],
      [0.5, 0, -0.5],
      [0, 0.7071067811865476, 0],
      [0, -0.7071067811865476, 0],
    ];

    const ind = [
      0, 4, 1, 0, 1, 5, 2, 1, 4, 2, 5, 1, 2, 4, 3, 2, 3, 5, 0, 3, 4, 0, 5, 3,
    ];

    this.prim = primitive("Platonth", ind, pos);
    this.matrW = matr4();
    this.drawType = gl.TRIANGLES;
  }

  response() {
    let time;

    let date = new Date();
    time = date.getSeconds() * 1000 + date.getMilliseconds();

    let matrR = matr4();
    matrR.mulMatr(matr4().scale(vec3(0.9)));

    matrR.mulMatr(matr4().rotate(Math.sin(time * 0.001) * 0.1, vec3(0, 1, 0)));
    this.matrW = matrR;
  }
}

///////
///icosahedron
///////

class icosahedron {
  init() {
    let pos = [
      [0, 1, 0],
      [0.8944271909999159, 0.4472135954999579, 0],
      [0.276393202250021, 0.4472135954999579, -0.85065080835204],
      [-0.7236067977499789, 0.4472135954999579, -0.5257311121191336],
      [-0.7236067977499789, 0.4472135954999579, 0.5257311121191336],
      [0.276393202250021, 0.4472135954999579, 0.85065080835204],
      [0.7236067977499789, -0.4472135954999579, -0.5257311121191336],
      [-0.276393202250021, -0.4472135954999579, -0.85065080835204],
      [-0.8944271909999159, -0.4472135954999579, 0],
      [-0.276393202250021, -0.4472135954999579, 0.85065080835204],
      [0.7236067977499789, -0.4472135954999579, 0.5257311121191336],
    ];

    const ind = [
      0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 5, 0, 5, 1, 1, 10, 6, 2, 1, 6, 2, 6, 7,
      3, 2, 7, 3, 7, 8, 4, 3, 8, 4, 8, 9, 5, 4, 9, 5, 9, 10, 1, 5, 10, 11, 10,
      9, 11, 9, 8, 11, 8, 7, 11, 7, 6, 11, 6, 10,
    ];

    this.prim = primitive("Platonth", ind, pos);
    this.matrW = matr4();
    this.drawType = gl.TRIANGLES;
  }

  response() {
    let time;

    let date = new Date();
    time = date.getSeconds() * 1000 + date.getMilliseconds();

    let matrR = matr4();
    matrR.mulMatr(matr4().scale(vec3(0.9)));

    matrR.mulMatr(matr4().rotate(Math.sin(time * 0.001) * 0.1, vec3(0, 1, 0)));
    this.matrW = matrR;
  }
}

///////
///hexahedron
///////

class hexahedron {
  init() {
    let pos = [
      [0.5, 0.5, 0.5],
      [-0.5, 0.5, 0.5],
      [-0.5, 0.5, -0.5],
      [0.5, 0.5, -0.5],
      [0.5, -0.5, 0.5],
      [-0.5, -0.5, 0.5],
      [-0.5, -0.5, -0.5],
      [0.5, -0.5, -0.5],
    ];

    const ind = [
      0, 2, 1, 0, 3, 2, 5, 4, 0, 5, 0, 1, 5, 1, 2, 5, 2, 6, 5, 6, 7, 5, 7, 4, 7,
      3, 0, 7, 0, 4, 2, 3, 7, 2, 7, 6,
    ];

    this.prim = primitive("Platonth", ind, pos);
    this.matrW = matr4();
    this.drawType = gl.TRIANGLES;
  }

  response() {
    let time;

    let date = new Date();
    time = date.getSeconds() * 1000 + date.getMilliseconds();

    let matrR = matr4();
    matrR.mulMatr(matr4().scale(vec3(0.9)));

    matrR.mulMatr(matr4().rotate(Math.sin(time * 0.001) * 0.1, vec3(0, 1, 0)));
    this.matrW = matrR;
  }
}

///////
///dodecahedron
///////

class dodecahedron {
  init() {
    let pos = [
      [0.3902734644166456, 0.6314757303333053, -0.28355026945068],
      [-0.14907119849998599, 0.6314757303333053, -0.4587939734903912],
      [-0.48240453183331927, 0.6314757303333053, 0],
      [-0.14907119849998599, 0.6314757303333053, 0.4587939734903912],
      [0.3902734644166456, 0.6314757303333053, 0.28355026945068],
      [0.6314757303333053, 0.14907119849998599, -0.4587939734903912],
      [0.24120226591665964, -0.14907119849998599, -0.7423442429410713],
      [-0.24120226591665964, 0.14907119849998599, -0.7423442429410713],
      [-0.6314757303333053, -0.14907119849998599, -0.4587939734903912],
      [-0.7805469288332912, 0.14907119849998599, 0],
      [-0.6314757303333053, -0.14907119849998599, 0.4587939734903912],
      [-0.24120226591665964, 0.14907119849998599, 0.7423442429410713],
      [0.24120226591665964, -0.14907119849998599, 0.7423442429410713],
      [0.6314757303333053, 0.14907119849998599, 0.4587939734903912],
      [0.7805469288332914, -0.14907119849998599, 0],
      [0.14907119849998599, -0.6314757303333053, 0.4587939734903912],
      [-0.3902734644166456, -0.6314757303333053, 0.28355026945068],
      [-0.3902734644166456, -0.6314757303333053, -0.28355026945068],
      [0.14907119849998599, -0.6314757303333053, -0.4587939734903912],
      [0.48240453183331927, -0.6314757303333053, 0],
    ];

    const ind = [
      0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 13, 0, 13, 14, 0, 14, 5, 0, 5, 6, 0, 6,
      7, 0, 7, 1, 8, 9, 2, 8, 2, 1, 8, 1, 7, 8, 7, 6, 8, 6, 18, 8, 18, 17, 8,
      17, 16, 8, 16, 10, 8, 10, 9, 11, 3, 2, 11, 2, 9, 11, 9, 10, 11, 10, 16,
      11, 16, 15, 11, 15, 12, 11, 12, 13, 11, 13, 4, 11, 4, 3, 19, 14, 13, 19,
      13, 12, 19, 12, 15, 19, 18, 6, 19, 6, 5, 19, 5, 14, 19, 15, 16, 19, 16,
      17, 19, 17, 18,
    ];

    this.prim = primitive("Platonth", ind, pos);
    this.matrW = matr4();
    this.drawType = gl.TRIANGLES;
  }

  response() {
    let time;

    let date = new Date();
    time = date.getSeconds() * 1000 + date.getMilliseconds();

    let matrR = matr4();
    matrR.mulMatr(matr4().scale(vec3(0.9)));

    matrR.mulMatr(matr4().rotate(Math.sin(time * 0.001) * 0.1, vec3(0, 1, 0)));
    this.matrW = matrR;
  }
}

//////////////////
///exportetd class
//////////////////
class _units {
  unitsArray = [];

  init() {
    this.unitsArray.push(new tetrahedron());
    this.unitsArray.push(new octahedron());
    this.unitsArray.push(new icosahedron());
    this.unitsArray.push(new hexahedron());
    this.unitsArray.push(new dodecahedron());
  }
}

export function units(...arg) {
  return new _units(...arg);
}
