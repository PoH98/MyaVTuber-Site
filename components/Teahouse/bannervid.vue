<template>
  <div class="vid-loc">
    <div class="backdrop" />
    <div
      id="teahouse-frame"
      data-iframe="https://www.youtube.com/embed/2yzSUwVOnTU?playlist=2yzSUwVOnTU&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&vq=hd720"
    ></div>
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
      const frame = document.getElementById("teahouse-frame");
      const wrapper = document.getElementsByClassName("vid-loc")[0];
      if (frame) {
        if (window.innerWidth < 1560 && window.innerWidth > 480) {
          frame.style.width = "1560px";
          frame.style.height = "880px";
          frame.style.top = "-50px";
          frame.style.left = -((1560 - window.innerWidth) / 2) + "px";
          wrapper.style.height = "700px";
        } else if (window.innerWidth <= 480) {
          frame.style.width = "600px";
          frame.style.height = "330px";
          frame.style.top = "-58px";
          frame.style.left = -((600 - window.innerWidth) / 2) + "px";
          wrapper.style.height = "400px";
        } else {
          frame.style.width = window.innerWidth + "px";
          frame.style.height = window.innerWidth * 0.6 + "px";
          frame.style.top = -((window.innerWidth * 0.6 - 600) / 2) + "px";
          frame.style.left = "0";
          wrapper.style.height = "800px";
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.vid-loc {
  position: relative;
  .backdrop {
    inset: 0;
    position: absolute;
    z-index: 1;
  }
  * {
    position: absolute;
    z-index: -1;
  }
}
</style>