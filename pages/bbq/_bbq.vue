<template>
  <v-sheet class="bbq">
    <v-container class="py-10">
      <h1 class="mb-3 heading-1">
        <v-icon>{{ mdiFoodDrumstick }}</v-icon>
        <span>米亞烤肉組</span>
        <v-icon>{{ mdiFoodDrumstick }}</v-icon>
      </h1>
      <h3 class="mb-5">總共伺服器已收藏影片：{{ total }}</h3>
      <v-row>
        <v-col
          cols="12"
          md="3"
          class="video-col"
          v-for="c in content"
          :key="c.Thumbnail"
        >
          <v-card
            @click="() => {}"
            elevation="0"
            :class="hover ? 'enlight video-card' : 'video-card darken'"
          >
            <v-img
              contain
              @click="
                showDialog = true;
                selectedVideo = c.Thumbnail;
              "
              class="img-preview"
              :lazy-src="
                'https://www.mya-hkvtuber.com/img/' +
                c.Thumbnail +
                '.jpg?height=155&format=jpg'
              "
              :src="
                'https://www.mya-hkvtuber.com/img/' +
                c.Thumbnail +
                '.jpg?height=155&format=jpg'
              "
            >
            </v-img>
            <v-card-text class="pt-0 px-0">
              <v-row class="my-0 mx-0">
                <v-col class="px-2 py-0 text-left">
                  <p
                    @click="
                      showDialog = true;
                      selectedVideo = c.Thumbnail;
                    "
                    :class="
                      ($vuetify.theme.dark ? 'white--text' : 'black--text') +
                      ' video-ellipsis pt-4'
                    "
                  >
                    {{ c.Title }}
                  </p>
                  <a
                    target="_blank"
                    :href="'https://www.youtube.com/channel/' + c.AuthorUrl"
                    :class="
                      ($vuetify.theme.dark ? '' : 'light-link ') +
                      'video-ellipsis author-link'
                    "
                  >
                    {{ c.Author }}
                  </a>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        color="rgb(248, 187, 208)"
        v-model="currentPage"
        :length="page"
      ></v-pagination>
    </v-container>
    <v-dialog v-if="showDialog" fullscreen v-model="showDialog">
      <v-card>
        <v-sheet>
          <v-row class="justify-end my-0 mx-0">
            <v-col cols="1">
              <v-btn icon @click="showDialog = false">
                <v-icon> {{ mdiClose }} </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-card-text class="video-card-body py-0">
            <iframe
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              type="text/html"
              class="full-frame"
              allowfullscreen
              :src="
                'https://www.youtube-nocookie.com/embed/' +
                selectedVideo +
                '?rel=0'
              "
            ></iframe>
          </v-card-text>
        </v-sheet>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>
<script>
import { mdiFoodDrumstick, mdiClose } from "@mdi/js";
export default {
  data() {
    return {
      isMobile: false,
      mdiFoodDrumstick,
      mdiClose,
      selectedVideo: null,
      showDialog: false,
    };
  },
  mounted() {
    if (process.client) {
      if (window.innerWidth < 480) {
        this.isMobile = true;
      }
    }
  },
  async asyncData({ $http, params }) {
    let currentPage = 1;
    if (params.bbq) {
      if (!isNaN(params)) {
        currentPage = parseInt(params.bbq);
      }
    }
    const tempData = await $http
      .get(
        "https://www.mya-hkvtuber.com/api/mya/getOtherVideos?page=" +
          (currentPage - 1)
      )
      .then((res) => res.json());
    const content = tempData.Videos;
    const page = tempData.Pages;
    const total = tempData.TotalVideos;
    return { content, page, total, currentPage };
  },
  watch: {
    async currentPage(val) {
      const tempData = await this.$http
        .get(
          "https://www.mya-hkvtuber.com/api/mya/getOtherVideos?page=" +
            (val - 1)
        )
        .then((res) => res.json());
      this.content = tempData.Videos;
    },
  },
};
</script>
<style>
.bbq .video-card {
  height: 100%;
}
.bbq .heading-1 {
  z-index: 1;
  display: block;
  position: relative;
}
.bbq .img-preview {
  border-radius: 12px !important;
}
.bbq .video-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.full-frame {
  position: absolute;
  inset: 10px;
  width: calc(100% - 20px);
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.video-card-body {
  position: relative;
  min-height: calc(100vh - 80px);
}
.bbq .author-link {
  opacity: 0.8;
  text-decoration: none;
}
.bbq .light-link {
  color: #606060;
}
</style>