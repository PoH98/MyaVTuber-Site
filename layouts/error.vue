<template>
  <v-row class="flex-column text-center h-100 justify-center">
    <v-container :class="$vuetify.theme.dark?'white--text':''">
      <v-img width="50" height="50" src="/img/lol.png" class="mx-auto mb-8" />
      <div class="mb-5" v-if="error.statusCode === 404">
        <h1>
          {{ pageNotFound }}
        </h1>
        <p>
          米亞唔知你想去邊，不如我哋返翻首頁?
        </p>
      </div>
      <div class="mb-5" v-else>
        <h1>{{ otherError }}</h1>
        <p>
          米亞唔知你做左咩，不過似乎網頁已經崩潰，不如我哋返翻首頁?
        </p>
      </div>
      <NuxtLink :class="$vuetify.theme.dark?'white--text':''" to="/"> 首頁 </NuxtLink>
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.h-100 {
  height: 100%;
}
</style>
