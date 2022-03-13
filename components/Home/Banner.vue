<template>
  <div class="disable-event">
    <div class="gradient"></div>
    <div
      id="background-frame"
      data-iframe="https://www.youtube.com/embed/Lmlfs8nP23U?playlist=Lmlfs8nP23U&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&vq=hd720"
      data-img="/img/sayyouknow.jpg"
    ></div>
    <div class="title">
      <p class="text-h4">「臭DD 幾時單推我啊」</p>
      <p class="text-right by">by Mya 米亞</p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.onresize = () => {
      this.calcFrame();
    };
    this.calcFrame();
  },
  methods: {
    calcFrame() {
      const frame = document.getElementById("background-frame");
      if (frame) {
        if (window.innerWidth < 1560 && window.innerWidth > 480) {
          frame.style.width = "1560px";
          frame.style.height = "880px";
          frame.style.top = "-50px";
          frame.style.left = -((1560 - window.innerWidth) / 2) + "px";
        } else if (window.innerWidth <= 480) {
          frame.style.width = "600px";
          frame.style.height = "330px";
          frame.style.top = "-58px";
          frame.style.left = -((600 - window.innerWidth) / 2) + "px";
        } else {
          frame.style.width = window.innerWidth + "px";
          frame.style.height = window.innerWidth * 0.6 + "px";
          frame.style.top = -((window.innerWidth * 0.6 - 600) / 2) + "px";
          frame.style.left = "0";
        }
      }
    },
  },
};
</script>
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
  height: 600px;
  width: 100vw;
  overflow: hidden;
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
@media (max-width: 380px) {
  .title .text-h4 {
    font-size: 8.2vw !important;
  }
}
@media (max-width: 480px) {
  .disable-event {
    height: 280px;
  }
  .title .by {
    width: 90%;
    font-size: 6vw;
  }
}
</style>
