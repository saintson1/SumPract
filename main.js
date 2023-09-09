import { render } from "./src/rnd/render.js";

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
