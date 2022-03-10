<template>
  <div class="disable-event">
    <div class="gradient"></div>
    <div
      id="gummy-vid"
      data-iframe="https://www.youtube.com/embed/P_fJCQQz0V0?playlist=P_fJCQQz0V0&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&vq=hd720"
      data-img="/img/losemymind.jpg"
    ></div>
  </div>
</template>
<style scoped>
.h-100 {
  height: 100%;
}
.by {
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
