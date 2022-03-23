<template>
  <v-img height="calc(100vh - 130px)" alt="@Handmaker" src="/img/asshurt.jpg">
    <v-container class="half-trans">
      <h1 class="text-left my-4">米亞梗字典</h1>
      <v-row class="fixed-height">
        <v-col
          cols="12"
          md="4"
          lg="3"
          v-for="(data, i) in content"
          :key="'wiki_' + i"
        >
          <v-card
            :class="'h-100 ' + getContrastYIQ(data.flatData.backgroundcolor)"
            :to="'/meme/' + data.id"
            :color="data.flatData.backgroundcolor"
            flat
          >
            <v-card-title class="text-h5 justify-space-between">
              {{ data.flatData.title }}
              <v-icon :class="getContrastYIQ(data.flatData.backgroundcolor)">{{
                mdiChevronTripleRight
              }}</v-icon>
            </v-card-title>
            <v-card-text
              :class="
                'text-left ' + getContrastYIQ(data.flatData.backgroundcolor)
              "
            >
              {{ data.flatData.shortdesc }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>
<script>
import { mdiChevronTripleRight } from "@mdi/js";
export default {
  head() {
    return {
      title: "米亞梗字典",
    };
  },
  data() {
    return {
      mdiChevronTripleRight,
    };
  },
  async asyncData({ $http }) {
    const tempData = await $http
      .get(
        "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryJokewikiContents{ id ,flatData{ title, shortdesc, backgroundcolor } }}"
      )
      .then((res) => res.json());
    const content = tempData.data.queryJokewikiContents;
    return { content };
  },
  methods: {
    getContrastYIQ(hexcolor) {
      hexcolor = hexcolor.replace("#", "");
      var r = parseInt(hexcolor.substr(0, 2), 16);
      var g = parseInt(hexcolor.substr(2, 2), 16);
      var b = parseInt(hexcolor.substr(4, 2), 16);
      var yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? "black--text" : "white--text";
    },
  },
};
</script>
<style scoped>
.h-100 {
  height: 100%;
}
.half-trans {
  background: rgba(255, 255, 255, 0.6);
  height: calc(100vh - 130px);
}
.fixed-height {
  max-height: 93%;
  overflow: auto;
}
</style>