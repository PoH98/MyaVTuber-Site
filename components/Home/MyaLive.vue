<template>
  <v-sheet :class="'mya-live-statistics ' + color">
    <v-container class="py-10">
      <v-row class="justify-center">
        <v-col class="text-center">
          <h2>米亞頻道數據情況</h2>
          <p>當前訂閱人數：{{ status.subscriberCount }}</p>
          <p>當前總觀看量：{{ status.viewCount }}</p>
        </v-col>
      </v-row>
      <hr class="my-5" />
      <v-row>
        <v-col cols="12" class="text-subtitle-1 font-weight-bold">
          {{ getMonday() }} - {{ getSunday() }} 直播時間表</v-col>
        <v-col cols="12">
          <v-responsive v-if="futurevid.TimeTableUrl" :aspect-ratio="1280 / 720">
            <v-img v-if="!isMobile" style="width: 100%; height: 100%;" :lazy-src="
              'https://www.mya-hkvtuber.com/img/' +
              futurevid.TimeTableUrl +
              '.jpg?width=1280&format=jpg'
            " :src="
  'https://www.mya-hkvtuber.com/img/' +
  futurevid.TimeTableUrl +
  '.jpg?width=1280&format=jpg'
" />
            <v-img v-else style="width: 100%; height: 100%;" :lazy-src="
              'https://www.mya-hkvtuber.com/img/' +
              futurevid.TimeTableUrl +
              '.jpg?width=480&format=jpg'
            " :src="
  'https://www.mya-hkvtuber.com/img/' +
  futurevid.TimeTableUrl +
  '.jpg?width=480&format=jpg'
" />
          </v-responsive>
          <h3 class="mt-4">Upcoming</h3>
          <p v-if="futurevid.Videos && futurevid.Videos.length < 1">
            暫無已計劃的直播，等待米亞編排中...
          </p>
        </v-col>
        <v-col cols="12" md="6" class="video-col" v-for="(v, i) in futurevid.Videos" :key="'vid_' + i">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card :href="v.Url" :elevation="isHovering ? 5 : 0" v-bind="props"
                :class="isHovering ? 'enlight upcoming-card' : 'upcoming-card darken'">
                <v-img v-if="!isMobile" class="text-white align-end" height="300" :lazy-src="
                  'https://www.mya-hkvtuber.com/img/' +
                  v.Thumbnail +
                  '.jpg?width=700&format=jpg'
                " :src="
  'https://www.mya-hkvtuber.com/img/' +
  v.Thumbnail +
  '.jpg?width=700&format=jpg'
">
                  <v-card-title v-text="v.Title"></v-card-title>
                  <hr />
                  <v-card-text v-if="getIsFutureLive(v.ScheduledStartTime)">
                    即將會在{{ convertTime(v.ScheduledStartTime) }} (9:00pm) 播出
                  </v-card-text>
                  <v-card-text v-else-if="getIsNowPlaying(v.ScheduledStartTime)">
                    正在播出
                  </v-card-text>
                  <v-card-text v-else> 已結束播放 </v-card-text>
                </v-img>
                <v-img v-else gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)" class="text-white align-end"
                  height="250" :lazy-src="
                    'https://www.mya-hkvtuber.com/img/' +
                    v.Thumbnail +
                    '.jpg?width=480&format=jpg'
                  " :src="
  'https://www.mya-hkvtuber.com/img/' +
  v.Thumbnail +
  '.jpg?width=480&format=jpg'
">
                  <v-card-title v-text="v.Title"></v-card-title>
                  <hr />
                  <v-card-text v-if="getIsFutureLive(v.ScheduledStartTime)">
                    即將會在{{ convertTime(v.ScheduledStartTime) }}播出
                  </v-card-text>
                  <v-card-text v-else-if="getIsNowPlaying(v.ScheduledStartTime)">
                    正在播出
                  </v-card-text>
                  <v-card-text v-else> 已結束播放 </v-card-text>
                </v-img>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <div class="floating-video" v-if="selectedVideo">
    <iframe ref="iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html"
      class="full-frame" allowfullscreen allow="autoplay"
      :src="'https://www.youtube-nocookie.com/embed/' + selectedVideo?.Thumbnail + '?rel=0&autoplay=1'"></iframe>
  </div>
</template>
<script>
import { useSharedDataStore } from '@/store/sharedData.js';
export default {
  props: {
    color: String,
    required: true,
  },
  setup() {
    const store = useSharedDataStore();
    return { store };
  },
  data() {
    return {
      isMobile: false,
    };
  },
  computed: {
    status() {
      return this.store.status;
    },
    futurevid() {
      return this.store.futurevid;
    },
    selectedVideo() {
      let result = null;
      if (!this.futurevid.Videos) {
        return result;
      }
      if (this.futurevid.Videos.length > 0) {
        this.futurevid.Videos.forEach((v) => {
          if (this.getIsNowPlaying(v.ScheduledStartTime) && !this.getIsFutureLive(v.ScheduledStartTime)) {
            result = v;
            return result;
          }
        })
      }

      return result;
    }
  },
  mounted() {
    if (process.client) {
      if (window.innerWidth < 480) {
        this.isMobile = true;
      }
    }
  },
  methods: {
    convertTime(time) {
      return new Date(time).toLocaleDateString("zh-TW");
    },
    getMonday() {
      let d = new Date();
      var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1);
      d.setHours(0);
      d.setMinutes(0);
      d.setSeconds(0);
      return new Date(d.setDate(diff)).toLocaleDateString("zh-TW");
    },
    getIsFutureLive(time) {
      if (new Date() <= new Date(time).setHours(21, 0, 0, 0)) {
        return true;
      }
      return false;
    },
    getIsNowPlaying(time) {
      if (new Date() <= new Date(time).setHours(23, 0, 0, 0)) {
        return true;
      }
      return false;
    },
    getSunday() {
      var now = new Date();
      now.setDate(now.getDate() + ((7 + (7 - now.getDay())) % 7));
      return now.toLocaleDateString("zh-TW");
    },
  },
};
</script>
<style>
.upcoming-card {
  transition: all 0.5s ease;
}

.upcoming-card .v-responsive__content::after {
  content: "";
  inset: 0;
  position: absolute;
  transition: all 0.5s ease;
}

.upcoming-card.darken .v-responsive__content::after {
  background-color: rgba(0, 0, 0, 0.5);
}

.upcoming-card.enlight {
  transform: scale(1.02);
  z-index: 1;
}

.upcoming-card .v-responsive__content * {
  z-index: 1;
  position: relative;
}

.upcoming-card.enlight .v-responsive__content::after {
  background-color: rgba(0, 0, 0, 0);
}

.upcoming-card .v-responsive__content {
  transition: all 0.5s ease;
}

.upcoming-card.enlight .v-responsive__content {
  background-color: rgba(0, 0, 0, 0.5);
}

.floating-video {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 400px;
  height: 225px;
}

@media(max-width: 500px) {
  .floating-video {
    right: 10vw;
    width: 80vw;
    height: 50vw;
  }
}

.floating-video iframe {
  width: 100%;
  height: 100%;
}
</style>