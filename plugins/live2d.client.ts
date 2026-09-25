export default defineNuxtPlugin((nuxtApp) => {
  let disposed = false;
  let cleanup = () => {};
  const dispose = () => {
    disposed = true;
    cleanup();
  };
  nuxtApp.vueApp.onUnmount(dispose);
  import.meta.hot?.dispose(dispose);

  nuxtApp.hook("app:mounted", async () => {
    const canvas = document.getElementById("live2d");
    if (window.innerWidth <= 480 || !(canvas instanceof HTMLCanvasElement)) return;

    try {
      // The engine reads Cubism Core at import time, so wait for the local script.
      if (!("Live2DCubismCore" in window)) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "/script/live2dcubismcore-5.2.min.js";
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Unable to load Cubism Core"));
          document.head.appendChild(script);
        });
      }
      if (disposed) return;

      const { createLive2D } = await import("../lib/live2d");
      if (disposed) return;
      cleanup = await createLive2D(canvas);
      if (disposed) cleanup();
    } catch (error) {
      console.error("Unable to initialize Live2D", error);
    }
  });
});
