<template>
  <div class="patient-container">
    <v-img
      class="background"
      src="@/assets/dad12provide.jpg"
      gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.7)"
    />
    <v-container class="name"
      ><h1 class="font-weight-bold">{{ patient.名 }}</h1></v-container
    >
    <FSection disablePadding>
      <v-container>
        <div class="social-media">
          <p
            class="text-caption font-weight-bold"
            v-if="patient.FB || patient.Insta || patient.Twitter"
          >
            小心個人資料外洩以及人身安全，聯絡對方請保持警惕！任何不愉快事件恕不負責！
          </p>
          <v-btn
            v-if="patient.FB"
            :href="patient.FB"
            color="blue darken-2"
            class="mx-2 mb-4"
            dark
            rounded
          >
            <v-icon class="mr-2">mdi-facebook</v-icon>院友FB
          </v-btn>
          <v-btn
            v-if="patient.Insta"
            :href="patient.Insta"
            color="deep-purple darken-3"
            class="mx-2 mb-4"
            dark
            rounded
          >
            <v-icon class="mr-2">mdi-instagram</v-icon>院友Instagram
          </v-btn>
          <v-btn
            v-if="patient.Twitter"
            :href="patient.Twitter"
            color="blue"
            class="mx-2 mb-4"
            dark
            rounded
          >
            <v-icon class="mr-2">mdi-twitter</v-icon>院友Twitter
          </v-btn>
        </div>
        <p class="text-left text-h6 mb-9">{{ patient.介紹 }}</p>
      </v-container>
    </FSection>
    <FSection color="white">
      <v-container>
        <div id="lightgallery">
          <a
            v-for="(data, index) in patient.作品"
            :key="'作品' + index"
            :href="data.位置"
          >
            <img :src="data.圖片" />
          </a>
        </div>
      </v-container>
    </FSection>
  </div>
</template>
<script>
import "lightgallery.js";
import "lg-thumbnail.js";
import "lg-video.js";
import "@vimeo/player/dist/player";
import "lightgallery.js/dist/css/lightgallery.css";
export default {
  components: {
    FSection: () => import("../components/Home/FullSection.vue"),
  },
  data() {
    return {
      patient: {},
    };
  },
  created() {
    this.patient = require(`@/assets/data/${this.$route.params.name.toLowerCase()}.json`);
    setTimeout(() => {
      const el = document.getElementById("lightgallery");
      console.log(el);
      window.lightGallery(el, {
        mode: "lg-fade",
        thumbnail: true,
        autoplayFirstVideo: false,
        loadYoutubeThumbnail: true,
        youtubeThumbSize: "default",
        loadVimeoThumbnail: true,
        vimeoThumbSize: "thumbnail_medium",
      });
    }, 1000);
  },
};
</script>
<style scoped>
.patient-container {
  position: relative;
}
.background {
  height: 400px;
}
.name {
  position: absolute;
  left: 0;
  right: 0;
  top: 340px;
  text-align: left;
  color: white;
}
.social-media {
  min-height: 36px;
}
</style>