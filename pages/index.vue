<template>
  <div>
    <banner />
    <div class="bg-white">
      <Carousel @change="changeSlide" ref="carousel">
        <FSection color="white" disableLazy>
          <v-container class="text-left" v-html="content.myadesc"></v-container>
        </FSection>
        <Section color="#000">
          <template v-slot:before>
            <div class="background-gummy">
              <Particles id="particle-bg" :options="particleoptions" />
            </div>
          </template>
          <template v-slot:left>
            <Glitch
              classes="white--text text-h3 mb-5"
              content="~ 甘米主人 ~"
            ></Glitch>
            <div
              class="glass-bg-effect gummy-panel white--text text-left"
              v-html="content.gummydesc"
            ></div>
          </template>
          <template v-slot:right>
            <div class="d-flex flex-column justify-center h-100">
              <Gummy />
              <div class="text-center gummy-panel">
                <small class="white--text"
                  >Produced by
                  <a class="white--text" href="https://twitter.com/BASA8383"
                    >BASA
                  </a>
                </small>
              </div>
            </div>
          </template>
        </Section>
      </Carousel>
      <v-tabs-items v-model="tab">
        <v-tab-item :eager="true">
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
        </v-tab-item>
        <v-tab-item :eager="true">
          <SubSection :subsection="content.gummysubsection" />
          <v-lazy>
            <v-parallax
              class="full-banner filter-dark"
              src="/img/gummies.jpg"
              alt="@cheukcat"
            />
          </v-lazy>
          <FSection color="black" disableLazy>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <h3 class="white--text mb-4">甘米的Social Media</h3>
                  <div
                    class="d-flex flex-column justify-space-between"
                    style="height: calc(100% - 28px)"
                  >
                    <div>
                      <v-btn
                        href="https://www.instagram.com/gummy_forest"
                        target="_blank"
                        class="mb-5 white--text"
                        color="blue-grey darken-2"
                        block
                      >
                        Instagram
                      </v-btn>
                      <v-btn
                        href="https://twitter.com/gummy_forest"
                        target="_blank"
                        class="mb-5 white--text"
                        color="blue-grey darken-2"
                        block
                      >
                        Twitter
                      </v-btn>
                      <v-btn
                        href="https://www.youtube.com/channel/UCfllDiny72kp9ppGDdaBGWQ"
                        target="_blank"
                        color="blue-grey darken-2"
                        class="mb-5 white--text"
                        block
                      >
                        Youtube
                      </v-btn>
                    </div>
                    <div>
                      <v-img src="/img/gummy.jpg" />
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="6" class="twitter mt-5 mt-md-0">
                  <span class="col-12 col-md-6 px-0 py-0">
                    <a
                      href="https://twitter.com/gummy_forest?ref_src=twsrc%5Etfw"
                      class="twitter-follow-button"
                      data-show-count="true"
                      >Follow @gummy_forest</a
                    >
                  </span>
                  <div ref="gummyTweets">
                    <a
                      data-chrome="noborders noheader nofooter noscrollbar"
                      data-tweet-limit="3"
                      class="twitter-timeline"
                      href="https://twitter.com/gummy_forest?ref_src=twsrc%5Etfw"
                      >Tweets by Gummy</a
                    >
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </FSection>
        </v-tab-item>
      </v-tabs-items>
      <v-row :class="'py-5 mx-0 ' + theme[tab]">
        <v-col class="text-left">
          <v-btn :class="'px-10 ' + theme[tab]" v-if="tab > 0" plain @click="prev">上一頁</v-btn>
        </v-col>
        <v-col class="text-right">
          <v-btn :class="'px-10 ' + theme[tab]" v-if="tab < maxTabs" plain @click="next"
            >下一頁</v-btn
          >
        </v-col>
      </v-row>
      <mya-live :color="theme[tab]" />
      <FSection>
        <v-container>
          <p class="text-h4 mb-0">院友期待你的加入！</p>
          <NuxtLink class="mb-0" to="/thanks">特別感謝院友名單</NuxtLink>
        </v-container>
      </FSection>
    </div>
  </div>
</template>
<script>
import Particles from "particles.vue";
import Carousel from "~/components/Shared/Carousel.vue";
import SubSection from "~/components/Home/SubSections.vue";
import Vue from "vue";
import MyaLive from "../components/Home/MyaLive.vue";
Vue.use(Particles);
export default {
  name: "indexView",
  components: {
    Banner: () => import("~/components/Home/Banner.vue"),
    Gummy: () => import("~/components/Home/gummy-vid.vue"),
    Glitch: () => import("~/components/Home/glitch.vue"),
    Section: () => import("~/components/Home/SecondarySection.vue"),
    FSection: () => import("~/components/Home/FullSection.vue"),
    ImageBoard: () => import("~/components/Home/ImageBoard.vue"),
    Carousel,
    SubSection,
    MyaLive,
  },
  data() {
    return {
      tab: 0,
      maxTabs: 1,
      autoScroll: null,
      theme:[
        'white black--text',
        'black white--text'
      ],
      particleoptions: {
        background: {
          color: {
            value: "#303030",
          },
        },
        fpsLimit: 30,
        fullScreen: {
          enable: false,
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: {
              min: 0.3,
              max: 1,
            },
            random: {
              enable: false,
              minimumValue: 0.3,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      },
      content: {},
    };
  },
  async asyncData({ $http }) {
    let tempData = null;
    if (process.server) {
      try {
        tempData = await $http
          .get("http://localhost:1000/api/content/mya-vtuber-api/home/", {
            headers: {
              "X-Flatten": 1,
            },
          })
          .then((res) => res.json());
      } catch {
        tempData = await $http
          .get(
            "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/home/",
            {
              headers: {
                "X-Flatten": 1,
              },
            }
          )
          .then((res) => res.json());
      }
    } else {
      tempData = await $http
        .get("https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/home/", {
          headers: {
            "X-Flatten": 1,
          },
        })
        .then((res) => res.json());
    }
    const content = tempData.items[0].data;
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
    /*    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.autoScroll = setTimeout(() => {
          if (this.tab < this.maxTabs) {
            if (window.innerWidth > 480) {
              window.scrollTo(0, 600);
            } else {
              window.scrollTo(0, 280);
            }
            this.$refs.carousel.next();
          }
        }, 1500);
      }
      else{
        clearTimeout(this.autoScroll)
      }
    };*/
  },
  methods: {
    changeSlide(index) {
      this.tab = index;
    },
    next() {
      if (window.innerWidth > 480) {
        window.scrollTo(0, 600);
      } else {
        window.scrollTo(0, 280);
      }
      setTimeout(() => {
        this.$refs.carousel.next();
      }, 1000);
    },
    prev() {
      if (window.innerWidth > 480) {
        window.scrollTo(0, 600);
      } else {
        window.scrollTo(0, 280);
      }
      setTimeout(() => {
        this.$refs.carousel.prev();
      }, 1000);
    },
  },
};
</script>
<style scoped>
@media (max-width: 390px) {
  .text-banner .text-h6 {
    font-size: 4.5vw !important;
  }
}
#particle-bg {
  height: 100%;
}
.background-gummy {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.gummy-panel {
  position: relative;
  z-index: 1;
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
.gummy-banner {
  max-height: 200px;
  min-height: 150px;
}
.twitter {
  max-height: 650px;
  overflow: auto;
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
.glass-bg-effect {
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
}
.glass-bg-effect p {
  margin-bottom: 0;
}
.glass-bg-effect ul {
  margin-top: 8px;
  margin-bottom: 8px;
}
.glass-bg-effect a {
  color: white;
}
</style>