<template>
  <div class="patient-container">
    <v-img cover v-if="patient.Banner" class="background" :src="patient.Banner"
      gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.7)" />
    <v-img cover v-else class="background" src="/img/dad12provide.jpg"
      gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.7)" />
    <v-container class="second-nav">
      <v-btn variant="plain" class="white--text" to="/thanks">
        <v-icon>
          {{ mdiChevronLeft }}
        </v-icon>
        Back
      </v-btn>
    </v-container>
    <v-container class="name">
      <h1 class="font-weight-bold">{{ patient.name }}</h1>
    </v-container>
    <FSection disablePadding color="rgb(248, 187, 208)">
      <v-container>
        <div class="social-media">
          <p class="text-caption font-weight-bold" v-if="patient.FB || patient.Insta || patient.Twitter">
            小心個人資料外洩以及人身安全，聯絡對方請保持警惕！任何不愉快事件恕不負責！
          </p>
          <v-btn v-if="patient.FB" :href="patient.FB" color="blue darken-2" class="mx-2 mb-4 white--text" rounded>
            <v-icon class="mr-2">{{ mdiFacebook }}</v-icon>院友FB
          </v-btn>
          <v-btn v-if="patient.Insta" :href="patient.Insta" color="deep-purple darken-3" class="mx-2 mb-4 white--text"
            rounded>
            <v-icon class="mr-2">{{ mdiInstagram }}</v-icon>院友Instagram
          </v-btn>
          <v-btn v-if="patient.Twitter" :href="patient.Twitter" color="blue" class="mx-2 mb-4 white--text" rounded>
            <v-icon class="mr-2">{{ mdiTwitter }}</v-icon>院友Twitter
          </v-btn>
        </div>
        <ClientOnly>
          <p class="text-left text-h6 mb-9" v-html="patient.desc"></p>
        </ClientOnly>
      </v-container>
    </FSection>
    <FSection>
      <v-container v-if="patient.Works && patient.Works.length > 0">
        <h2 class="mb-5">院友自創作品</h2>
        <ClientOnly>
          <photo-provider>
            <photo-consumer v-for="(data, index) in patient.Works.filter(
              (x) => !checkIsSiteLink(x.location)
            )" :key="'作品' + index" :src="data.img" target="_blank" rel="noreferrer">
              <img class="view-box" :src="data.img" />
            </photo-consumer>
          </photo-provider>
        </ClientOnly>

        <p class="mt-5 text-h5 font-weight-bold" v-if="
          patient.Works.filter((x) => checkIsSiteLink(x.location)).length > 0
        ">
          外部鏈接作品
        </p>
        <p class="mb-5" v-if="
          patient.Works.filter((x) => checkIsSiteLink(x.location)).length > 0
        ">
          <b>注意！！</b><br />
          （下列會係因種種原因無法加載到網頁內，離開網頁前請確保唔好下載或者運行任何不知名文件！
          任何電腦版Covid19感染或者電腦當場爆炸恕不負責）
        </p>
        <div class="other-posts">
          <a :href="data.location" v-for="(data, index) in patient.Works.filter((x) =>
            checkIsSiteLink(x.location)
          )" :key="'Others' + index" target="_blank" rel="noreferrer">
            <img class="view-box" :src="data.img" />
          </a>
        </div>
      </v-container>
      <v-container v-else id="no-content">
        本院友無上傳任何自創作品
      </v-container>
    </FSection>
  </div>
</template>
<script>
import { useHead } from 'unhead';
import { mdiFacebook, mdiInstagram, mdiTwitter, mdiChevronLeft } from "@mdi/js";
import FSection from "~/components/Home/FullSection.vue";
export default {
  name: "PatientView",
  components: {
    FSection
  },
  data() {
    return {
      mdiFacebook,
      mdiInstagram,
      mdiTwitter,
      mdiChevronLeft,
      siteLink: ["twitter.com", "youtube.com", "youtu.be"],
      plugins: []
    };
  },
  methods: {
    checkIsSiteLink(data) {
      return this.siteLink.some((v) => data.includes(v));
    },
    capitalizeFirstLetter(string) {
      const words = string.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      return words.join(" ");
    },
  },
  async setup() {
    const route = useRoute();
    const tempData = await useAsyncData(() => $fetch("https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/patient-list/" +
      route.params.patient,
      { headers: { "X-Flatten": 1 } }));
    const patient = tempData.data.value.data;
    useHead({
      title: patient.name,
    })
    return { patient };
  },
};
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

.view-box {
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
