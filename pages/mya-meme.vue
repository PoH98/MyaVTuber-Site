<template>
  <v-img height="calc(100vh - 130px)" alt="@Handmaker" src="/img/asshurt.jpg">
    <v-container class="half-trans" v-if="!content.error">
      <h1 class="text-left my-4">米亞梗字典</h1>
      <v-row class="fixed-height" v-if="content.length > 0">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(data, i) in content"
          :key="'wiki_' + i"
        >
          <v-card class="h-100 meme-card" :to="'/meme/' + data.id" flat>
            <div v-if="data.flatData.cardimg" class="px-4 pt-4">
              <v-img :src="data.flatData.cardimg" />
            </div>
            <v-card-title class="text-h5 justify-space-between">
              <v-row>
                <v-col cols="12">
                  {{ data.flatData.title }}
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text v-if="data.flatData.shortdesc" class="text-left">
              {{ data.flatData.shortdesc }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-h6" v-else>無人添加過任何內容啊PK, 無人加咪你來囖</div>
    </v-container>
    <v-container class="half-trans" v-else>
      <h1 class="mt-15">此頁面未開放哦！請耐心等待！</h1>
      <p class="text-h6 font-weight-bold">
        米亞禁止此頁面顯示，網頁作者已被捅爆屎眼
      </p>
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
        "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryJokewikiContents{ id ,flatData{ title, shortdesc, cardimg } }}"
      )
      .then((res) => res.json());
    if (tempData.errors) {
      return { content: { error: true } };
    } else {
      const content = tempData.data.queryJokewikiContents;
      return { content };
    }
  },
  methods: {
    getContrastYIQ(hexcolor) {
      if (hexcolor) {
        hexcolor = hexcolor.replace("#", "");
        var r = parseInt(hexcolor.substr(0, 2), 16);
        var g = parseInt(hexcolor.substr(2, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? "black--text" : "white--text";
      }
      return "black--text";
    },
  },
};
</script>
<style scoped lang="scss">
.h-100 {
  height: 100%;
}
.half-trans {
  background: rgba(255, 255, 255, 0.6);
  height: calc(100vh - 130px);
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
.fixed-height {
  max-height: 93%;
  overflow-y: auto;
  overflow-x: hidden;
}
.meme-card {
  transition: all .5s;
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  * {
    width: 100%;
    word-break: break-word;
  }
}
.meme-card:hover {
  transform: scale(1.1);
  z-index: 10;
  box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.3) !important;
  -webkit-box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.3) !important;
}
</style>