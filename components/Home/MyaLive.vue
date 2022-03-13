<template>
  <div :class="color">
    <v-container class="py-10">
      <v-row>
        <v-col class="text-center">
          <h2>米亞頻道數據情況</h2>
          <p>當前訂閱人數：{{ status.subscriberCount }}</p>
          <p>當前總觀看量：{{ status.viewCount }}</p>
        </v-col>
      </v-row>
      <hr class="my-5" />
      <v-row>
        <v-col cols="12">
          <v-img
            contain
            :src="
              'https://www.mya-hkvtuber.com/api/mya/getimage?imgId=' +
              futurevid.TimeTableUrl
            "
          />
          <h3 class="mt-4">Upcomming</h3>
        </v-col>
        <v-col
          cols="12"
          md="6"
          v-for="(v, i) in futurevid.Videos"
          :key="'vid_' + i"
        >
          <v-card :href="v.Url">
            <v-img
              gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
              contain
              class="white--text align-end"
              height="250"
              :src="
                'https://www.mya-hkvtuber.com/api/mya/getimage?imgId=' +
                v.Thumbnail
              "
            >
              <v-card-title v-text="v.Title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    color: String,
    required: true,
  },
  data() {
    return {
      status: {},
      futurevid: {},
    };
  },
  async fetch() {
    this.status = await this.$http
      .get("https://www.mya-hkvtuber.com/api/mya/getytstatus")
      .then((res) => res.json());
    this.futurevid = await this.$http
      .get("https://www.mya-hkvtuber.com/api/mya/getfuturevid")
      .then((res) => res.json());
  },
};
</script>
<style scoped>
.img-error {
  height: 150px;
}
</style>