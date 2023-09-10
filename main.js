import { render } from "./src/rnd/render.js";

const press = (val) => {
  window.topologyState = val;
};

export function main() {
  let rnd = render();
  window.addEventListener("load", () => {
    rnd.init();

    const draw = () => {
      rnd.start();
      rnd.draw();
      window.requestAnimationFrame(draw);
    };
    draw();
  });
}
