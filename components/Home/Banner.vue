<template>
  <div :class="'disable-event' + (showFools? ' fools':'')">
    <div class="gradient"></div>
    <ClientOnly>
      <div id="background-frame" v-if="showFools"
        data-iframe="https://www.youtube.com/embed/mkxer6pxQ6I?playlist=mkxer6pxQ6I&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&vq=hd720"
        data-img="/img/rickroll.jpg"></div>
      <div id="background-frame" v-else
        data-iframe="https://www.youtube.com/embed/Lmlfs8nP23U?playlist=Lmlfs8nP23U&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&vq=hd720"
        data-img="/img/sayyouknow.jpg"></div>
    </ClientOnly>
    <div class="title" v-if="!showBirthday && !showFools">
      <p class="text-h4 text-top">「臭DD 幾時單推我啊」</p>
      <p class="text-right by text-bottom">by Mya 米亞</p>
    </div>
    <div class="title" v-else-if="showBirthday">
      <p class="text-h4 text-top">米亞生日快樂！</p>
      <p class="text-right by text-bottom">恭喜小熊貓</p>
    </div>
    <div class="title" v-else-if="showFools">
      <p class="text-h4 text-top">Never gonna 祝賀大家愚人節快樂！</p>
      <p class="text-right by text-bottom">Oh my god! Wow!</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBirthday: false,
      showFools: false,
      interval: null
    };
  },
  beforeMount() {
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    if (month == 1 && date == 4) {
      //mya birthday
      this.showBirthday = true;
    }
    if (month == 4 && date == 1) {
      this.showFools = true;
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.calcFrame();
    }, 100)
  },
  beforeUnmount() {
    clearInterval(this.interval)
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
  opacity: 0;
  animation: showTopText 5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
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
  z-index: 3;
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
  .disable-event.fools{
    height: 500px;
  }
  .title{
    padding-left: 16px;
    padding-right: 16px;
  }
  .title .by {
    width: 90%;
    font-size: 6vw;
  }
}
</style>
<style>
#background-frame {
  z-index: 1;
}
</style>