<template>
  <v-sheet>
    <v-container>
      <h1>
        <v-icon class="mr-2">{{ mdiPartyPopper }}</v-icon
        >感謝名單<v-icon class="ml-1">{{ mdiPartyPopper }}</v-icon>
      </h1>
      <hr class="my-5" />
      <h2>院友們的幫助，完成依個網頁</h2>
      <v-row class="mt-5">
        <v-col
          cols="12"
          md="4"
          v-for="(user, index) in users"
          :key="'user_' + index"
        >
          <nuxt-link :to="`/patient/${user.id}`">
            <v-sheet>
              {{ user.flatData.name }}
            </v-sheet>
          </nuxt-link>
        </v-col>
      </v-row>
      <hr class="my-5" />
      <h2 class="text-center mt-5">已使用的服務/插件/框架</h2>
      <v-row class="my-5">
        <v-col
          cols="12"
          md="2"
          v-for="(frame, i) in frameworks"
          :key="'frame_' + i"
        >
          {{ frame }}
        </v-col>
      </v-row>
      <hr />
      <div class="text-center mt-5 text-h5">AND 正在瀏覽依個網頁的你</div>
    </v-container>
  </v-sheet>
</template>
<script>
import { mdiPartyPopper } from "@mdi/js";
export default {
  name: "ThanksView",
  head() {
    return {
      title: "特別感謝",
    };
  },
  data() {
    return {
      mdiPartyPopper,
      frameworks: [
        "Vue js 2",
        "Vimeo Player",
        "MDI js",
        "Lightgallery js",
        "Particles js",
        "Vuetify",
        "Nuxt js",
      ],
    };
  },
  async asyncData({ $http }) {
    const tempData = await $http
      .get(
        "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryPatientListContents{ id ,flatData{ name } }}"
      )
      .then((res) => res.json());
    const users = tempData.data.queryPatientListContents;
    return { users };
  },
};
</script>
