<template>
  <div class="patient-container" v-if="!isLoading">
    <v-img
      v-if="patient.Banner"
      class="background"
      :src="patient.Banner"
      gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.7)"
    />
    <v-img
      v-else
      class="background"
      src="@/assets/dad12provide.jpg"
      gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.7)"
    />
    <v-container class="second-nav">
      <v-btn dark plain to="/thanks">
        <v-icon>
          {{ mdiChevronLeft }}
        </v-icon>
        Back
      </v-btn>
    </v-container>
    <v-container class="name">
      <h1 class="font-weight-bold">{{ patient.名 }}</h1>
    </v-container>
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
            <v-icon class="mr-2">{{ mdiFacebook }}</v-icon
            >院友FB
          </v-btn>
          <v-btn
            v-if="patient.Insta"
            :href="patient.Insta"
            color="deep-purple darken-3"
            class="mx-2 mb-4"
            dark
            rounded
          >
            <v-icon class="mr-2">{{ mdiInstagram }}</v-icon
            >院友Instagram
          </v-btn>
          <v-btn
            v-if="patient.Twitter"
            :href="patient.Twitter"
            color="blue"
            class="mx-2 mb-4"
            dark
            rounded
          >
            <v-icon class="mr-2">{{ mdiTwitter }}</v-icon
            >院友Twitter
          </v-btn>
        </div>
        <p class="text-left text-h6 mb-9" v-html="patient.介紹"></p>
      </v-container>
    </FSection>
    <FSection color="white">
      <v-container v-if="patient.作品.length > 0">
        <h2 class="mb-5">院友自創作品</h2>
        <v-flex id="lightgallery">
          <a
            v-for="(data, index) in patient.作品.filter(
              (x) => !checkIsSiteLink(x.位置)
            )"
            :key="'作品' + index"
            :href="data.位置"
          >
            <img class="preview-img" :src="data.圖片" />
          </a>
        </v-flex>
        <p
          class="mt-5 text-h5 font-weight-bold"
          v-if="patient.作品.filter((x) => checkIsSiteLink(x.位置)).length > 0"
        >
          外部鏈接作品
        </p>
        <p
          class="mb-5"
          v-if="patient.作品.filter((x) => checkIsSiteLink(x.位置)).length > 0"
        >
          <b>注意！！</b><br />
          （下列會係因種種原因無法加載到網頁內，離開網頁前請確保唔好下載或者運行任何不知名文件！
          任何電腦版Covid19感染或者電腦當場爆炸恕不負責）
        </p>
        <div class="other-posts">
          <a
            :href="data.位置"
            v-for="(data, index) in patient.作品.filter((x) =>
              checkIsSiteLink(x.位置)
            )"
            :key="'Others' + index"
          >
            <img class="preview-img" :src="data.圖片" />
          </a>
        </div>
      </v-container>
      <v-container v-else id="no-content">
        本院友無上傳任何自創作品
      </v-container>
    </FSection>
  </div>
  <v-overlay :value="isLoading" v-else>
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>
<script>
import axios from 'axios'
import { mdiFacebook, mdiInstagram, mdiTwitter, mdiChevronLeft } from '@mdi/js'
import lightGallery from 'lightgallery.js'
import 'lg-thumbnail.js'
import 'lg-video.js'
import '@vimeo/player/dist/player'
import 'lightgallery.js/dist/css/lightgallery.css'
export default {
  name: 'PatientView',
  components: {
    FSection: () => import('@/components/Home/FullSection.vue'),
  },
  data() {
    return {
      patient: {},
      isLoading: true,
      mdiFacebook,
      mdiInstagram,
      mdiTwitter,
      mdiChevronLeft,
      siteLink: ['twitter.com'],
    }
  },
  methods: {
    checkIsSiteLink(data) {
      return this.siteLink.some((v) => data.includes(v))
    },
  },
  mounted() {
    axios
      .post('https://api.myavtuber.workers.dev/api', {
        name: this.$route.params.patient.toLowerCase(),
      })
      .then((result) => {
        this.patient = result.data
        this.isLoading = false
        this.$wait('#lightgallery', '#no-content').then((data) => {
          if (data.type === 'Normal') {
            try {
              lightGallery(data.el, {
                mode: 'lg-fade',
                thumbnail: true,
                autoplayFirstVideo: false,
                loadYoutubeThumbnail: true,
                youtubeThumbSize: 'default',
                loadVimeoThumbnail: true,
                vimeoThumbSize: 'thumbnail_medium',
              })
            } catch {
              this.$router.push({
                path: '/thanks',
              })
            }
          } else {
            console.log('no upload found')
          }
        })
      })
  },
}
</script>
<style scoped>
.second-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  text-align: left;
}
.preview-img {
  max-width: 350px;
  margin-left: 5px;
  margin-bottom: 5px;
}
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
