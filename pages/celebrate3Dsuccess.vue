<template>
  <section class="celebrate">
    <img src="/img/fullwidth.jpg" class="bg-img" />
    <v-container
      :class="isLoading ? 'pt-1' : 'pt-10 no-scroll'"
      style="z-index: 1"
    >
      <v-progress-linear
        v-if="isLoading"
        indeterminate
        color="pink"
        height="10px"
      ></v-progress-linear>
      <v-row class="mt-5">
        <v-col cols="12" class="white--text big-title">
          {{ title }}
        </v-col>
      </v-row>
      <v-row class="scrollable" v-if="!isLoading">
        <v-col cols="12" md="4" v-for="(c, i) in content" :key="i">
          <v-card
            class="h-100 comment-cards"
            :style="
              $vuetify.theme.dark ? '--bg-color: white;' : '--bg-color: black;'
            "
          >
            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
            <div class="px-3 py-1">
              <v-card-title>
                {{ c.data.name.iv }}
              </v-card-title>
              <v-card-text class="text-left">
                <span
                  class="typing"
                  :style="'--steps:' + c.data.wish.iv.length"
                >
                  {{ c.data.wish.iv }}
                </span>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-15 pt-15" v-else>
        <v-col
          cols="12"
          class="white--text half-transparent-bg justify-center d-flex text-h6"
          style="z-index: 1"
        >
          <span class="bouncing-0" style="--dl: 1s">L</span>
          <span class="bouncing-1" style="--dl: 1.2s">o</span>
          <span class="bouncing-2" style="--dl: 1.4s">a</span>
          <span class="bouncing-3" style="--dl: 1.6s">d</span>
          <span class="bouncing-4" style="--dl: 1.8s">i</span>
          <span class="bouncing-5" style="--dl: 2s">n</span>
          <span class="bouncing-6" style="--dl: 2.2s">g</span>
          <span class="bouncing-7" style="--dl: 2.4s">.</span>
          <span class="bouncing-8" style="--dl: 2.6s">.</span>
          <span class="bouncing-9" style="--dl: 2.8s">.</span>
        </v-col>
        <v-col
          cols="12"
          class="green--text black text-left fake-console"
          style="z-index: 1"
          v-html="fakeLoading"
        >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: "祝賀米亞3D化成功",
    };
  },
  data() {
    return {
      title: "",
      titleIndex: 0,
      typingInterval: null,
      isLoading: true,
      fakeLoading: "",
      fakeLoadingInterval: null,
      fakeLoadingHold: false,
      fakeLoadingHoldInteger: 0,
    };
  },
  mounted() {
    this.fakeLoadingInterval = setInterval(() => {
      let str = `<h1>You are warned!</h1><br/><p>Loading MYA Ransomware...</p>|<p>Encrypting device...</p>|<br/>|<br/>|<p>Device encrypted...Please pay 1647 BTC to unlock your device in 3 sec or else your files will be deleted forever!</p>
      <p>BTC account: 3nwXZ8yH33esSOdsOvnNfF9e/CcExysEjLG64fyZBtE=</p>|<p>LOL you believe this shit? (PS: try decode the hash!)</p>`;
      if (this.fakeLoadingHold) {
        this.fakeLoading += "&#9632; ";
        this.fakeLoadingHoldInteger++;
        if (this.fakeLoadingHoldInteger >= 15) {
          this.fakeLoadingHold = false;
          this.fakeLoadingHoldInteger = 0;
        }
      } else {
        if (str[this.titleIndex] === "|") {
          this.fakeLoadingHold = true;
          this.fakeLoading = this.fakeLoading.slice(0, -1);
        } else {
          this.fakeLoading = this.fakeLoading.slice(0, -1);
          this.fakeLoading += str[this.titleIndex] + "_";
        }
        this.titleIndex++;
      }
      if (this.titleIndex >= str.length) {
        this.fakeLoading = this.fakeLoading.slice(0, -1);
        clearInterval(this.fakeLoadingInterval);
      }
    }, 10);
    setTimeout(() => {
      this.isLoading = false;
      this.titleIndex = 0;
      this.typingInterval = setInterval(() => {
        let str = "多謝米亞的努力，讓大家一起見證依個特別的時刻！";
        this.title = this.title.slice(0, -1);
        this.title += str[this.titleIndex] + "_";
        this.titleIndex++;
        if (this.titleIndex >= str.length) {
          this.title = this.title.slice(0, -1);
          clearInterval(this.typingInterval);
        }
      }, 100);
    }, 7000);
  },
  async asyncData({ $http }) {
    let tempData = await $http
      .get(
        "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryCelebrate3dContents{data{name{iv}wish{iv}}}}"
      )
      .then((res) => res.json());
    const content = tempData.data.queryCelebrate3dContents;
    return { content };
  },
};
</script>
<style scoped>
.h-100 {
  height: 100%;
}

.half-transparent-bg {
  background-color: rgba(0, 0, 0, 0.3);
}

.bouncing-0,
.bouncing-1,
.bouncing-2,
.bouncing-3,
.bouncing-4,
.bouncing-5,
.bouncing-6,
.bouncing-7,
.bouncing-8,
.bouncing-9 {
  display: block;
  animation: bounce;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
  animation-delay: var(--dl);
}

.no-scroll {
  overflow: hidden;
  max-height: calc(100vh - 67px - 67px);
}

.scrollable {
  position: relative;
  height: calc(100vh - 67px - 90px - 67px);
  overflow-y: visible;
  overflow-x: hidden;
  padding-bottom: 30px;
}

.scrollable::-webkit-scrollbar {
  width: 14px;
}

.scrollable::-webkit-scrollbar-track {
  background: #ffffff;
}

.scrollable::-webkit-scrollbar-thumb {
  background-color: #ff00bb;
  border-radius: 10px;
  border: 3px solid #ffffff;
}

.big-title {
  opacity: 1;
  text-align: center;
  display: block;
  z-index: 1;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 0px 1px #5c5c5c, 0px 1px 1px #535353, 2px 1px 1px #5c5c5c,
    1px 2px 1px #535353, 3px 2px 1px #5c5c5c, 2px 3px 1px #535353,
    4px 3px 1px #5c5c5c, 3px 4px 1px #535353, 2px 2px 2px rgba(206, 89, 55, 0);
}
.bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: calc(100vh - 67px - 67px);
  object-fit: cover;
  filter: brightness(40%) grayscale(100%);
  animation-name: colorChange;
  animation-duration: 6s;
  animation-fill-mode: forwards;
  z-index: 0;
}
.bg-img.no-animation {
  animation-name: none;
}

.comment-cards {
  position: relative;
  --tr: 90;
  --op: 0.5;
  filter: opacity(0.8);
}

.comment-cards .design-container {
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
}

.comment-cards:hover {
  --tr: 20;
  --op: 0.7;
  filter: opacity(1);
}

.fake-console{
  user-select: text;
}

.design {
  display: block;
  background: var(--bg-color);
  position: absolute;

  opacity: var(--op);
  transition: 0.3s;
}

.design--1,
.design--2,
.design--3,
.design--4 {
  width: 1px;
  height: 100%;
}

.design--1,
.design--2 {
  top: 0;
  transform: translateY(calc((var(--tr) - (var(--tr) * 2)) * 1%));
}

.design--1 {
  left: 2%;
}

.design--2 {
  left: 96%;
}

.design--3,
.design--4 {
  bottom: 0;
  transform: translateY(calc((var(--tr) + (var(--tr) - var(--tr))) * 1%));
}

.design--3 {
  left: 4%;
}

.design--4 {
  left: 98%;
}

.design--5,
.design--6,
.design--7,
.design--8 {
  width: 100%;
  height: 1px;
}

.design--5,
.design--6 {
  left: 0;
  transform: translateX(calc((var(--tr) - (var(--tr) * 2)) * 1%));
}

.design--5 {
  top: 2%;
}

.design--6 {
  top: 93%;
}

.design--7,
.design--8 {
  right: 0;
  transform: translateX(calc((var(--tr) + (var(--tr) - var(--tr))) * 1%));
}

.design--7 {
  top: 7%;
}

.design--8 {
  top: 98%;
}

@keyframes colorChange {
  0% {
    filter: brightness(40%) grayscale(100%);
  }
  80% {
    filter: brightness(100%) grayscale(0%);
  }
  100% {
    filter: brightness(80%) grayscale(0%);
  }
}

@keyframes bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-10px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  58% {
    transform: scale(1, 1) translateY(-1px);
  }
  65% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>