<template>
  <div>
    <Gummy :content="content" />
    <SubSection :subsection="content.gummysubsection" />
    <v-lazy>
      <v-parallax class="full-banner filter-dark" src="/img/gummies.jpg" alt="@cheukcat" />
    </v-lazy>
    <FSection color="black" linear-color="#999" disableLazy>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="text-white pb-4">甘米的Social Media</h3>
            <div class="d-flex flex-column justify-space-between" style="height: calc(100% - 28px)">
              <div>
                <v-btn href="https://www.instagram.com/gummy_forest" target="_blank" class="mb-5 white--text"
                  color="blue-grey darken-2" block>
                  Instagram
                </v-btn>
                <v-btn href="https://twitter.com/gummy_forest" target="_blank" class="mb-5 white--text"
                  color="blue-grey darken-2" block>
                  Twitter
                </v-btn>
                <v-btn href="https://www.youtube.com/channel/UCfllDiny72kp9ppGDdaBGWQ" target="_blank"
                  color="blue-grey darken-2" class="mb-5 white--text" block>
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
              <a href="https://twitter.com/gummy_forest?ref_src=twsrc%5Etfw" class="twitter-follow-button"
                data-show-count="true">Follow @gummy_forest</a>
            </span>
            <div ref="gummyTweets">
              <a data-chrome="noborders noheader nofooter noscrollbar" data-tweet-limit="3" class="twitter-timeline"
                href="https://twitter.com/gummy_forest?ref_src=twsrc%5Etfw">Tweets by Gummy</a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </FSection>
    <mya-live />
  </div>
</template>
<script setup>
    const tempData = await useAsyncData(() => $fetch(
      "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryHomeContents{ flatData{ gummydesc, gummysubsection{ backgroundColor, backgroundImage, content, type, button, buttonText, buttonIcon } } }}"
    ));
    const content = tempData.data.value.data.queryHomeContents[0].flatData;
    useHeadSafe({
      title: "甘米"
    });
</script>
<script>
import SubSection from "~/components/Home/SubSections.vue";
import MyaLive from "~/components/Home/MyaLive.vue";
import Banner from "~/components/Home/Banner.vue";
import Gummy from "~/components/Home/gummy-vid.vue";
import Glitch from "~/components/Home/glitch.vue";
import Section from "~/components/Home/SecondarySection.vue";
import FSection from "~/components/Home/FullSection.vue";
import ImageBoard from "~/components/Home/ImageBoard.vue";
export default {
  name: "gummyView",
  components: {
    Banner,
    Gummy,
    Glitch,
    Section,
    FSection,
    ImageBoard,
    SubSection,
    MyaLive,
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
  data() {
    return {
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
    };
  },
};
</script>
<style scoped>
.background-video * {
  position: absolute;
  left: 0;
  right: 0;
  height: 500px;
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

.filter-dark::after {
  content: " ";
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
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
</style>
<style>
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