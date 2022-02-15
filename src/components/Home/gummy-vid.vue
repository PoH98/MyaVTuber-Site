<template>
  <div class="disable-event">
    <div class="gradient"></div>
    <iframe
      id="gummy-vid"
      src="https://www.youtube.com/embed/P_fJCQQz0V0?playlist=P_fJCQQz0V0&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&vq=hd720"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; "
    ></iframe>
  </div>
</template>
<style scoped>
.by{
  width: 60%;
}
.gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.disable-event {
  pointer-events: none;
  position: relative;
  height: 300px;
  width: 100%;
  overflow: hidden;
}
@media (max-width: 480px) {
  .disable-event {
    height: 280px;
  }
}
iframe {
  position: absolute;
  top: -55px;
  left: 0;
  right: 0;
  width: calc(100% + 50px);
  height: 420px;
  opacity: 1;
}
.title {
  font-family: "Orbitron", sans-serif !important;
  top: 45%;
  left: 0;
  right: 0;
  position: absolute;
  color: white;
  z-index: 2;
}
</style>