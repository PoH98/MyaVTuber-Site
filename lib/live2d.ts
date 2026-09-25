import { Application, extensions } from "pixi.js";
import { cubismReady, Live2DModel, Live2DPlugin } from "untitled-pixi-live2d-engine/cubism";

export async function createLive2D(canvas: HTMLCanvasElement) {
  // Initialize Cubism's JSON defaults before the engine parses model settings.
  await cubismReady();
  extensions.add(Live2DPlugin);
  const app = new Application();
  await app.init({
    canvas,
    width: 255,
    height: 255,
    backgroundAlpha: 0,
    preference: "webgl",
  });

  const move = (event: MouseEvent) => {
    canvas.style.left = `${event.clientX - canvas.width / 2 + 15}px`;
    canvas.style.top = `${event.clientY - canvas.height / 2 + 40}px`;
  };
  let destroyed = false;
  const cleanup = () => {
    if (destroyed) return;
    destroyed = true;
    document.removeEventListener("mousemove", move);
    app.destroy({ removeView: false }, { children: true, texture: true, textureSource: true });
  };

  try {
    const model = await Live2DModel.from("/live2d/MYAAA/MYAAA.model3.json", { ticker: app.ticker });
    model.scale.set(0.2, 0.2);
    app.stage.addChild(model);
    document.addEventListener("mousemove", move);
    return cleanup;
  } catch (error) {
    cleanup();
    throw error;
  }
}
