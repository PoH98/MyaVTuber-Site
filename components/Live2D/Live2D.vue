<template>
  <canvas
    :id="live2dMainId"
    ref="vue-live2d-main"
    :width="live2dWidth"
    :height="live2dHeight"
    class="vue-live2d-main"
  ></canvas>
</template>
<script>
export default {
  props: {
    live2dMainId: {
      default: () => "live2d",
      type: String,
    },
    direction: {
      default: "right",
      type: String,
    },
    url: {
      default: "/script/MYAAA.vtube.json",
      type: String,
    },
    model: {
      default: "/script/MYAAA.moc3",
      type: String,
    },
    width: {
      default: 0,
      type: Number,
    },
    height: {
      default: 0,
      type: Number,
    },
    size: {
      default: 255,
      type: Number,
    },
  },
  computed: {
    live2dWidth() {
      return this.width ? this.width : this.size;
    },
    live2dHeight() {
      return this.height ? this.height : this.size;
    },
  },
  mounted() {
    if (process.client) {
      if (window.innerWidth > 480) {
        const script = document.createElement("script");
        script.setAttribute("src", "/script/live2dcubismcore.min.js");
        document.head.appendChild(script);
        const script2 = document.createElement("script");
        script2.setAttribute("src", "/script/bundle.live2d.js");
        document.head.appendChild(script2);
        const circle = document.getElementById(this.live2dMainId);
        document.addEventListener("mousemove", (e) => {
          let left = e.clientX - (circle.width/2) + 40;
          let top = e.clientY - (circle.height/2) + 20;
          circle.style.left = left + "px";
          circle.style.top = top + "px";
        });
      }
    }
  },
};
</script>
<style>
.vue-live2d-main {
  position: fixed;
  z-index: 5;
  pointer-events: none;
}
</style>