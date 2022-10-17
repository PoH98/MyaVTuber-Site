<template>
  <v-row class="mx-0">
    <v-col cols="12" md="8" v-if="position === 'left'">
      <v-card
        class="comment-cards"
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
        <v-card-text class="py-10">
          <video-player :options="videoOptions" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" class="d-flex flex-column justify-space-between">
      <div class="h-md-50" v-for="(c, i) in content" :key="i">
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
              <span class="typing" :style="'--steps:' + c.data.wish.iv.length">
                {{ c.data.wish.iv }}
              </span>
            </v-card-text>
          </div>
        </v-card>
      </div>
    </v-col>
    <v-col cols="12" md="8" v-if="position === 'right'">
      <v-card
        class="comment-cards"
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
        <v-card-text class="py-10">
          <video-player :options="videoOptions" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    video: {
      type: String,
    },
    post: {
      type: Array,
    },
    position: {
      type: String,
    },
  },
  computed: {
    videoOptions() {
      return {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: this.video,
            type: "video/mp4",
          },
        ],
      };
    },
    content() {
      if (this.post.length > 2) {
        return this.post.slice(0, 2);
      }
      return this.post;
    },
  },
};
</script>
<style scoped>
.comment-cards {
  position: relative;
  --tr: 90;
  --op: 0.5;
  filter: opacity(0.9);
  transition: all 0.5s ease;
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

.h-100 {
  height: 100%;
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
    filter: brightness(65%) grayscale(0%);
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

@media screen and (min-width: 480px) {
  .h-md-50 {
    height: 49%;
  }
}
</style>