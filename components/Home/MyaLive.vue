<template>
  <v-lazy :class="'mya-live-statistics ' + color">
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
          {{ getMonday() }} - {{ getSunday() }} 直播時間表</v-col
        >
        <v-col cols="12">
          <v-responsive :aspect-ratio="1280 / 720">
            <v-img
              v-if="!isMobile"
              contain
              width="100%"
              height="100%"
              :lazy-src="
                'https://www.mya-hkvtuber.com/img/' +
                futurevid.TimeTableUrl +
                '.jpg?width=1280&format=jpg'
              "
              :src="
                'https://www.mya-hkvtuber.com/img/' +
                futurevid.TimeTableUrl +
                '.jpg?width=1280&format=jpg'
              "
            />
            <v-img
              v-else
              contain
              width="100%"
              height="100%"
              :lazy-src="
                'https://www.mya-hkvtuber.com/img/' +
                futurevid.TimeTableUrl +
                '.jpg?width=480&format=jpg'
              "
              :src="
                'https://www.mya-hkvtuber.com/img/' +
                futurevid.TimeTableUrl +
                '.jpg?width=480&format=jpg'
              "
            />
          </v-responsive>
          <h3 class="mt-4">Upcoming</h3>
          <p v-if="futurevid.Videos && futurevid.Videos.length < 1">
            暫無已計劃的直播，等待米亞中...
          </p>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="video-col"
          v-for="(v, i) in futurevid.Videos"
          :key="'vid_' + i"
        >
          <v-card :href="v.Url">
            <v-img
              v-if="!isMobile"
              gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
              class="white--text align-end"
              height="300"
              :lazy-src="
                'https://www.mya-hkvtuber.com/img/' +
                v.Thumbnail +
                '.jpg?width=700&format=jpg'
              "
              :src="
                'https://www.mya-hkvtuber.com/img/' +
                v.Thumbnail +
                '.jpg?width=700&format=jpg'
              "
            >
              <v-card-title v-text="v.Title"></v-card-title>
              <hr />
              <v-card-text v-if="getIsFutureLive(v.ScheduledStartTime)">
                即將會在{{ convertTime(v.ScheduledStartTime) }} (9:00pm) 播出
              </v-card-text>
              <v-card-text v-else> 已結束播放 </v-card-text>
            </v-img>
            <v-img
              v-else
              gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
              class="white--text align-end"
              height="250"
              :lazy-src="
                'https://www.mya-hkvtuber.com/img/' +
                v.Thumbnail +
                '.jpg?width=480&format=jpg'
              "
              :src="
                'https://www.mya-hkvtuber.com/img/' +
                v.Thumbnail +
                '.jpg?width=480&format=jpg'
              "
            >
              <v-card-title v-text="v.Title"></v-card-title>
              <hr />
              <v-card-text v-if="getIsFutureLive(v.ScheduledStartTime)">
                即將會在{{ convertTime(v.ScheduledStartTime) }}播出
              </v-card-text>
              <v-card-text v-else> 已結束播放 </v-card-text>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-lazy>
</template>
<script>
export default {
  props: {
    color: String,
    required: true,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  computed: {
    status() {
      return this.$store.state.sharedData.status;
    },
    futurevid() {
      return this.$store.state.sharedData.futurevid;
    },
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
      console.log(time);
      if (new Date() <= new Date(time).setHours(21, 0, 0, 0)) {
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