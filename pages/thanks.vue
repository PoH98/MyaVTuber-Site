<template>
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
        <nuxt-link
          :to="`/patient/${user.data.name.toLowerCase().replace(' ', '_')}`"
        >
          {{ user.data.name }}
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
</template>
<script>
import { mdiPartyPopper } from '@mdi/js'
export default {
  name: 'ThanksView',
  head() {
    return {
      title: "Special Thanks"
    };
  },
  data() {
    return {
      mdiPartyPopper,
      frameworks: [
        'Vue js 2',
        'Vimeo Player',
        'MDI js',
        'Axios',
        'Lightgallery js',
        'Particles js',
        'Vuetify',
        'Nuxt js',
      ],
    }
  },
  computed:{
      users(){
          return this.$store.state.api.patient
      }
  },
  mounted(){
      this.$store.dispatch('api/patient')
  }
}
</script>
