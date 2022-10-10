<template>
  <v-container v-if="isLoading">
    <img id="backimg" src="/img/fullwidth.jpg" class="bg-img" />
  </v-container>
  <v-container class="mt-10" v-else>
    <img src="/img/fullwidth.jpg" class="bg-img no-animation" />
    <v-row class="mt-5">
      <v-col cols="12" class="white--text big-title">
        {{ title }}
      </v-col>
      <v-col cols="12" md="4" v-for="(c, i) in content" :key="i">
        <v-card class="h-100 comment-cards" :style="$vuetify.theme.dark?'--bg-color: white;':'--bg-color: black;'">
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
              <span class="typing" :style="'--steps:' + c.data.wish.iv.length">
                {{ c.data.wish.iv }}
              </span>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      titleIndex: 0,
      typingInterval: null,
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
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
    }, 6000);
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
.big-title {
  opacity: 1;
  text-align: center;
  display: block;
  z-index: 1;
  font-size: 24px;
  font-weight: bold;
}
.bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%) grayscale(100%);
  animation-name: colorChange;
  animation-duration: 6s;
  animation-fill-mode: forwards;
}
.bg-img.no-animation {
  animation-name: reverse;
  animation-duration: 3s;
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
  100% {
    filter: brightness(100%) grayscale(0%);
  }
}
@keyframes reverse {
  0% {
    filter: brightness(100%) grayscale(0%);
  }
  100% {
    filter: brightness(40%) grayscale(100%);
  }
}
</style>