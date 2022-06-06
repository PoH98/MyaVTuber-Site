<template>
  <div>
    <banner />
    <div class="bg-white">
      <FSection color="white" disableLazy>
        <v-container class="text-left" v-html="content.myadesc"></v-container>
      </FSection>
      <SubSection :subsection="content.subsection" />
      <v-lazy>
        <v-parallax
          class="full-banner"
          src="/img/fullwidth.jpg"
          alt="@/yuentsz123"
        />
      </v-lazy>
      <ImageBoard />
      <Section color="white" disableLazy>
        <template v-slot:left>
          <div class="twitter-title row">
            <div class="col-12 col-lg-6 text-lg-right py-0 px-0">
              <h2>最新官方Twitter</h2>
            </div>
            <span class="col-12 col-lg-6 px-0 py-0">
              <a
                href="https://twitter.com/MyaVtuber?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-show-count="true"
                >Follow @MyaVtuber</a
              >
            </span>
          </div>
          <v-container>
            <div class="twitter" ref="myaTweets">
              <a
                data-chrome="noborders noheader nofooter noscrollbar"
                data-tweet-limit="3"
                class="twitter-timeline"
                href="https://twitter.com/MyaVtuber?ref_src=twsrc%5Etfw"
                >Tweets by MyaVtuber</a
              >
            </div>
          </v-container>
        </template>
        <template v-slot:right>
          <v-lazy>
            <v-parallax
              class="full-banner"
              src="/img/fullwidth2.jpg"
              alt="綽貓喵CheukCat🍣-【HKVtuber】"
            />
          </v-lazy>
        </template>
      </Section>
      <FSection color="rgb(248, 187, 208)">
        <v-container class="text-banner">
          <p class="pr-15 text-h4 mb-0 d-none d-md-block">
            「很喜歡你，但我未能完全說出口
          </p>
          <p class="pl-15 text-h4 mb-0 d-none d-md-block">
            在現實的交錯裡，我跟你的邂逅」
          </p>
          <p class="pr-15 text-h6 font-weight-bold mb-0 d-md-none">
            「很喜歡你，但我未能完全說出口
          </p>
          <p class="pl-15 text-h6 font-weight-bold mb-0 d-md-none">
            在現實的交錯裡，我跟你的邂逅」
          </p>
          <p class="text-right by">講你知123</p>
        </v-container>
      </FSection>
      <v-lazy>
        <v-parallax
          class="full-banner"
          src="/img/myanewcloth.jpg"
          alt="@HigashikataKou"
        />
      </v-lazy>
      <mya-live color="#fff" />
      <FSection>
        <v-container>
          <p class="text-h4 mb-0">院友期待你的加入！</p>
          <NuxtLink class="mb-0" to="/thanks">特別感謝院友名單</NuxtLink>
        </v-container>
      </FSection>
    </div>
    <Live2D/>
  </div>
</template>
<script>
import Particles from "particles.vue";
import SubSection from "~/components/Home/SubSections.vue";
import Vue from "vue";
import MyaLive from "../components/Home/MyaLive.vue";
Vue.use(Particles);
export default {
  head() {
    return {
      title: "主頁",
    };
  },
  name: "indexView",
  components: {
    Live2D: () => import("~/components/Live2D/Live2D.vue"),
    Banner: () => import("~/components/Home/Banner.vue"),
    Gummy: () => import("~/components/Home/gummy-vid.vue"),
    Glitch: () => import("~/components/Home/glitch.vue"),
    Section: () => import("~/components/Home/SecondarySection.vue"),
    FSection: () => import("~/components/Home/FullSection.vue"),
    ImageBoard: () => import("~/components/Home/ImageBoard.vue"),
    SubSection,
    MyaLive,
  },
  data() {
    return {
      autoScroll: null,
      content: {},
    };
  },
  async asyncData({ $http }) {
    const tempData = await $http
      .get(
        "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryHomeContents{%20flatData{%20myadesc,%20subsection{%20backgroundColor,%20backgroundImage,%20content,%20type,%20button,%20buttonText,%20buttonIcon,%20button2,%20button2Text,%20button2Icon%20}%20}%20}}"
      )
      .then((res) => res.json());
    const content = tempData.data.queryHomeContents[0].flatData;
    return { content };
  },
  mounted() {
    if (!window.twttr) {
      window.twttr = (function (d, s, id) {
        var t,
          js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        js.defer = true;
        fjs.parentNode.insertBefore(js, fjs);
        return (
          window.twttr ||
          (t = {
            _e: [],
            ready: function (f) {
              t._e.push(f);
            },
          })
        );
      })(document, "script", "twitter-wjs");
    }
    window.twttr.ready(() => window.twttr.widgets.load());
  },
};
</script>
<style scoped>
@media (max-width: 390px) {
  .text-banner .text-h6 {
    font-size: 4.5vw !important;
  }
}
.bg-white {
  background-color: white;
  min-height: 55px;
  z-index: 1;
  position: relative;
  overflow: hidden;
}
.full-banner {
  min-height: 60vh;
}
.twitter {
  max-height: 650px;
  overflow: auto;
}
@media (min-width: 960px){
  .twitter{
    max-height: 530px;
  }
}
.twitter-follow-button {
  background-color: #1d9bf0;
  color: #fff;
  border-radius: 9999px;
  padding: 1px 12px;
  height: 20px;
  font-size: 12px;
}
.by {
  width: 80%;
}
.h-100 {
  height: 100%;
}
.filter-dark::after {
  content: " ";
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
<style>
html {
  scroll-behavior: smooth;
}
</style>