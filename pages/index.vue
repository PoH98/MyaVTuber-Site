<template>
  <banner />
  <div class="bg-white">
    <FSection disableLazy>
      <v-container class="text-left">

        <div v-html="content.myadesc">

        </div>
      </v-container>
    </FSection>
    <SubSection :subsection="content.subsection" />
    <v-lazy>
      <v-parallax class="full-banner" src="/img/fullwidth.jpg" alt="@/yuentsz123" />
    </v-lazy>
    <Section disableLazy>
      <template v-slot:left>
        <div class="twitter-title row">
          <div class="col-12 col-lg-6 text-lg-right py-0 px-0">
            <h2>最新官方Twitter</h2>
          </div>
          <span class="col-12 col-lg-6 px-0 py-0">
            <a href="https://twitter.com/mya_desu?ref_src=twsrc%5Etfw" class="twitter-follow-button"
              data-show-count="true">Follow @mya_desu</a>
          </span>
        </div>
        <v-container>
          <div class="twitter" ref="myaTweets">
            <a data-chrome="noborders noheader nofooter noscrollbar" data-tweet-limit="3" class="twitter-timeline"
              href="https://twitter.com/mya_desu?ref_src=twsrc%5Etfw">Tweets by @mya_desu</a>
          </div>
        </v-container>
      </template>
      <template v-slot:right>
        <v-lazy>
          <v-parallax class="full-banner" src="/img/fullwidth2.jpg" alt="綽貓喵CheukCat🍣-【HKVtuber】" />
        </v-lazy>
      </template>
    </Section>
    <FSection color="#f8bbd0" linear-color="#ffd6e4">
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
      <v-parallax class="full-banner" src="/img/myanewcloth.jpg" alt="@HigashikataKou" />
    </v-lazy>
    <mya-live />
    <FSection>
      <v-container>
        <p class="text-h4 mb-0">院友期待你的加入！</p>
        <NuxtLink class="mb-0" to="/thanks">特別感謝院友名單</NuxtLink>
      </v-container>
    </FSection>
  </div>
</template>
<script>
import SubSection from "~/components/Home/SubSections.vue";
import MyaLive from "~/components/Home/MyaLive.vue";
import Banner from "~/components/Home/Banner.vue";
import Gummy from "~/components/Home/gummy-vid.vue";
import Glitch from "~/components/Home/glitch.vue";
import Section from "~/components/Home/SecondarySection.vue";
import FSection from "~/components/Home/FullSection.vue";
import { useHead } from "unhead";
export default {
  async setup() {
    const tempData = await useAsyncData(() => $fetch("https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryHomeContents{%20flatData{%20myadesc,%20subsection{%20backgroundColor,%20linearBackgroundColor,%20backgroundImage,%20content,%20type,%20button,%20buttonText,%20buttonIcon,%20button2,%20button2Text,%20button2Icon%20}%20}%20}}"));
    const content = tempData.data.value.data.queryHomeContents[0].flatData;
    useHead({
      title: "主頁"
    });
    return { content };
  },
  name: "indexView",
  components: {
    Banner,
    Gummy,
    Glitch,
    Section,
    FSection,
    SubSection,
    MyaLive
  },
  data() {
    return {
      autoScroll: null
    };
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
    window.twttr.ready(() => {
      window.twttr.widgets.load();
    });
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

@media (min-width: 960px) {
  .twitter {
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