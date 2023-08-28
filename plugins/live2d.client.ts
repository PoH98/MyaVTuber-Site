import { Application } from "@pixi/app";
import { Ticker, TickerPlugin } from "@pixi/ticker";
import { Live2DModel } from "pixi-live2d-display/cubism4";
import { InteractionManager } from "@pixi/interaction";
import { Renderer } from "@pixi/core";
export default defineNuxtPlugin((nuxtApp) => {
  if (window.innerWidth > 480) {
    setTimeout(async () => {
      try {
        Live2DModel.registerTicker(Ticker);
        Application.registerPlugin(TickerPlugin);
        Renderer.registerPlugin("interaction", InteractionManager);
        const canvas = document.getElementById("live2d");
        if (canvas == null) {
          return;
        }
        const circle = <HTMLCanvasElement>canvas;
        let app = new Application({
          view: circle,
          width: 255,
          height: 255,
          backgroundAlpha: 0,
        });
        let model = await Live2DModel.from("/live2d/MYAAA/MYAAA.model3.json");
        model._autoInteract = false;
        model.scale.set(0.2, 0.2);
        app.stage.addChild(model);
        document.addEventListener("mousemove", (e) => {
          let left = e.clientX - circle.width / 2 + 15;
          let top = e.clientY - circle.height / 2 + 40;
          circle.style.left = left + "px";
          circle.style.top = top + "px";
        });
      } catch {
        //ignore and do not do anything
      }
    }, 1000);
  }
});
