<template>
  <div class="tea-house">
    <v-img
      gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
      class="big-banner align-center"
      alt="幽"
      src="/img/teahousebanner.jpg"
    >
      <h1 class="white--text banner-title">
        <span class="showup">歡迎</span>
        <span class="reveal">來到幻花茶屋</span>
      </h1>
    </v-img>
    <full-section color="#f8bbd0">
      <v-container class="text-md-left" v-html="content.teahousedesc">
      </v-container>
    </full-section>
    <sub-sections :subsection="content.teahousesubsection" />
    <v-img height="440" src="/img/teahouse.jpg"> </v-img>
    <secondary-section>
      <template v-slot:before>
        <h2>幻花茶屋の社交平台</h2>
      </template>
      <template v-slot:left>
        <div class="twitter">
          <a
            href="https://twitter.com/MyaVtuber?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-show-count="true"
            >Follow @MyaVtuber</a
          >
          <a
            data-chrome="noborders noheader nofooter noscrollbar"
            data-tweet-limit="3"
            class="twitter-timeline"
            href="https://twitter.com/HKVTOPIA?ref_src=twsrc%5Etfw"
            >Tweets by 幻花茶屋🍵</a
          >
        </div>
      </template>
      <template v-slot:right>
        <v-row class="h-100">
          <v-col cols="12">
            <v-btn block class="mb-3" href="https://www.youtube.com/channel/UCNO4BX9z_w8o1l-VFsKdS5g">Youtube</v-btn>
            <v-btn block class="mb-3" href="https://twitter.com/HKVTOPIA">Twitter</v-btn>
          </v-col>
          <v-col cols="12" class="d-flex py-0">
            <v-img class="mt-auto" src="/img/teahouse2.jpg" />
          </v-col>
        </v-row>
      </template>
    </secondary-section>
    <FullSection color="#fff">
      <v-container>
        <p class="text-h4 mb-0">院友期待你的加入！</p>
        <NuxtLink class="mb-0" to="/thanks">特別感謝院友名單</NuxtLink>
      </v-container>
    </FullSection>
  </div>
</template>
<script>
import SubSections from "../components/Home/SubSections.vue";
import FullSection from "../components/Home/FullSection.vue";
import SecondarySection from "../components/Home/SecondarySection.vue";
export default {
  head() {
    return {
      title: "幻花茶屋",
    };
  },
  components: { SubSections, FullSection, SecondarySection },
  async asyncData({ $http }) {
    let tempData = null;
    if (process.server) {
      try {
        tempData = await $http
          .get("https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryHomeContents{ flatData{ teahousedesc, teahousesubsection{ backgroundColor, backgroundImage, content, type, button, buttonText, buttonIcon } } }}")
          .then((res) => res.json());
      } catch {
        tempData = await $http
          .get(
            "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryHomeContents{ flatData{ teahousedesc, teahousesubsection{ backgroundColor, backgroundImage, content, type, button, buttonText, buttonIcon } } }}/"
          )
          .then((res) => res.json());
      }
    } else {
      tempData = await $http
        .get("https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryHomeContents{ flatData{ teahousedesc, teahousesubsection{ backgroundColor, backgroundImage, content, type, button, buttonText, buttonIcon } } }}")
        .then((res) => res.json());
    }
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
.h-100 {
  height: 100%;
}
.tea-house {
  min-height: 100vh;
}
.twitter {
  max-height: 650px;
  overflow: auto;
  background-color: #fff;
  padding-top: 15px;
}
.twitter-follow-button {
  background-color: #1d9bf0;
  color: #fff;
  border-radius: 9999px;
  padding: 1px 12px;
  height: 20px;
  font-size: 12px;
}
.big-banner {
  height: 90vh;
  z-index: 1;
}
.full-banner {
  min-height: 60vh;
}
.showup {
  animation: showup 7s;
}
.reveal {
  animation: slidein 7s;
  margin-left: -10px;
}
.banner-title {
  position: relative;
}
.banner-title::after {
  position: absolute;
  content: " ";
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  animation: lineAnimation 7s;
}
@keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
}

@keyframes lineAnimation {
  0% {
    opacity: 0;
    right: 100vw;
  }
  50% {
    opacity: 1;
    right: 0;
  }
}

@keyframes slidein {
  0% {
    opacity: 0;
    width: 0px;
    margin-left: -800px;
  }
  20% {
    width: 0px;
    margin-left: -800px;
  }
  35% {
    opacity: 0;
    width: 355px;
    margin-left: -10px;
  }
  80% {
    opacity: 1;
  }
  100% {
    width: 355px;
    margin-left: -10px;
  }
}
</style>
<style>
.tea-house .v-responsive__content {
  margin-left: -100%;
}
</style>