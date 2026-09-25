export default defineNuxtPlugin((nuxtApp) => {
  if (window.innerWidth > 480) {
    setTimeout(async () => {
      try {
        const canvas = document.getElementById("live2d");
        if (canvas == null) {
          return;
        }
        const [{ Application }, { Ticker, TickerPlugin }, { Live2DModel }] = await Promise.all([
          import("@pixi/app"),
          import("@pixi/ticker"),
          import("pixi-live2d-display/cubism4"),
        ]);
        Live2DModel.registerTicker(Ticker);
        Application.registerPlugin(TickerPlugin);
        const circle = <HTMLCanvasElement>canvas;
        let app = new Application({
          view: circle,
          width: 255,
          height: 255,
          backgroundAlpha: 0,
        });
        let model = await Live2DModel.from("/live2d/MYAAA/MYAAA.model3.json");
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
