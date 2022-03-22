<template>
  <div class="wiki">
    <v-img
      class="text-left"
      height="300px"
      v-if="content.image"
      :src="content.image"
      gradient="to bottom, rgba(0,0,0,.6), rgba(0,0,0,.3)"
    >
      <v-container>
        <v-btn class="white--text" plain to="/jokewiki">
          <v-icon> {{ mdiChevronLeft }} </v-icon>Back
        </v-btn>
      </v-container>
    </v-img>
    <v-container class="text-left">
      <v-btn v-if="!content.image" class="back-btn" plain to="/jokewiki">
        <v-icon> {{ mdiChevronLeft }} </v-icon>Back
      </v-btn>
      <h1 class="text-center">{{ content.title }}</h1>
      <p></p>
      <hr />
      <div class="content" v-html="content.longdesc"></div>
    </v-container>
  </div>
</template>
<script>
import { mdiChevronLeft } from "@mdi/js";
export default {
  data() {
    return {
      mdiChevronLeft,
    };
  },
  async asyncData({ params, $http }) {
    let tempData = null;
    if (process.server) {
      try {
        tempData = await $http
          .get(
            "http://localhost:1000/api/content/mya-vtuber-apii/jokewiki/" +
              params.wiki,
            { headers: { "X-Flatten": 1 } }
          )
          .then((res) => res.json());
      } catch {
        tempData = await $http
          .get(
            "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/jokewiki/" +
              params.wiki,
            { headers: { "X-Flatten": 1 } }
          )
          .then((res) => res.json());
      }
    } else {
      tempData = await $http
        .get(
          "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/jokewiki/" +
            params.wiki,
          { headers: { "X-Flatten": 1 } }
        )
        .then((res) => res.json());
    }
    const content = tempData.data;
    return { content };
  },
};
</script>
<style>
.wiki .content * {
  margin-bottom: 10px !important;
}
</style>