<template>
  <div class="disable-event">
    <div class="gradient"></div>
    <ClientOnly>
      <div id="gummy-vid"
        data-iframe="https://www.youtube.com/embed/x7-X9snnEZI?playlist=x7-X9snnEZI&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&vq=hd720"
        data-img="/img/losemymind.jpg"></div>
    </ClientOnly>
    <div class="title">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="5">
            <Glitch classes="white--text text-h3 mb-5" content="~ 甘米主人 ~"></Glitch>
          </v-col>
        </v-row>
        <div class="glass-bg-effect gummy-panel white--text text-left px-10 py-10" v-html="content.gummydesc"></div>
      </v-container>
    </div>
  </div>
</template>
<script>
import Glitch from "~/components/Home/glitch.vue"
export default {
  components: {
    Glitch,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      interval: null
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.calcFrame();
    }, 100);
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    calcFrame() {
      const frame = document.getElementById("gummy-vid");
      if (frame) {
        if (window.innerWidth < 1560 && window.innerWidth > 480) {
          frame.style.width = "1560px";
          frame.style.height = "880px";
          frame.style.top = "-135px";
          frame.style.left = -((1560 - window.innerWidth) / 2) + "px";
        } else if (window.innerWidth <= 480) {
          frame.style.width = "600px";
          frame.style.height = "500px";
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
@keyframes showTopText {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes showBottomText {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.h-100 {
  height: 100%;
}

.by {
  width: 60%;
}

.text-top {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
  opacity: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.text-bottom {
  opacity: 0;
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}

.gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.disable-event {
  position: relative;
  height: 600px;
  width: 100vw;
  overflow: hidden;
}

.title {
  font-family: "Orbitron", sans-serif !important;
  color: white;
  position: absolute;
  inset: 0;
  padding-top: 30px;
  z-index: 3;
}

@media (max-width: 380px) {
  .title .text-h4 {
    font-size: 8.2vw !important;
  }
}

@media (max-width: 480px) {
  .gummy-panel {
    font-size: 4vw;
    line-height: 6vw;
  }
}
</style>

<style>
#gummy-vid{
  z-index: 1;
}
</style>