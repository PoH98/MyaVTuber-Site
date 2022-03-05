<template>
  <div>
    <banner />
    <div class="bg-white">
      <FSection color="white">
        <v-container>
          <h2 class="text-left">關於米亞</h2>
          <ul class="text-left my-3">
            <li>
              由繪師甘米於2018年所創作，於2020年12月11日展開初配信[1]，並把原頻道交給米亞使用。
            </li>
            <li>設定上是一隻熊貓，受驚過度會變回熊貓形態。</li>
            <li>官方認證大小為H，但指的是Head的大小。</li>
            <li>笨手笨腳，事故熊貓(?)</li>
            <li>喜歡甜食，甚至會搶走主人的食物(?)</li>
          </ul>
          <p class="text-left">
            Reference:
            <a
              href="https://zh.moegirl.org.cn/index.php?title=%E7%B1%B3%E4%BA%9AMYA"
              target="_blank"
              >萌娘百科</a
            >
          </p>
        </v-container>
      </FSection>
      <Section :mobileReverse="true">
        <template v-slot:left>
          <div class="text-md-left d-flex flex-column justify-center h-100">
            <h2>米亞の飛天奶茶商店</h2>
            <p class="mb-0">精美的周邊產品望來依到啊！！</p>
            <p>絕對可以買到你破產！！</p>
            <div>
              <v-btn
                x-large
                target="_blank"
                rounded
                class="px-13"
                href="https://market.flyingmilktea.com/shop/113469"
              >
                <v-icon class="mr-2">{{ mdiCart }}</v-icon>
                購買
              </v-btn>
            </div>
          </div>
        </template>
        <template v-slot:right>
          <v-img src="/img/flyingmilktea.jpg" />
        </template>
      </Section>
      <Section color="white">
        <template v-slot:left>
          <div class="d-flex justify-center">
            <v-img
              src="/img/discordicon.png"
              max-width="300px"
              max-height="300px"
            />
          </div>
        </template>
        <template v-slot:right>
          <div class="text-md-right d-flex flex-column justify-center h-100">
            <h2>米亞のDiscord Server</h2>
            <p class="mb-0">官方Discord Server，歡迎大家</p>
            <p>入來認識更多院友啦！</p>
            <div>
              <v-btn
                x-large
                rounded
                target="_blank"
                class="px-13"
                href="https://discord.com/invite/erB5AW9Vrp"
              >
                <v-icon class="mr-2">{{ mdiDiscord }}</v-icon>
                加入
              </v-btn>
            </div>
          </div>
        </template>
      </Section>
      <Section>
        <template v-slot:left>
          <div class="text-md-left d-flex flex-column justify-center h-100">
            <h2>米亞後援會</h2>
            <p>
              由
              <span class="text-decoration-line-through"> DD12 </span>
              JC12創立，用於作為院友卑米亞驚喜用
            </p>
            <div>
              <v-btn
                x-large
                rounded
                target="_blank"
                class="px-13"
                href="https://twitter.com/MYA_HKVfanclub"
              >
                <v-icon class="mr-2">{{ mdiTwitter }}</v-icon>
                關注Twitter
              </v-btn>
            </div>
          </div>
        </template>
        <template v-slot:right>
          <p>暫時無圖片</p>
        </template>
      </Section>
      <v-parallax
        class="full-banner"
        src="/img/fullwidth.jpg"
        alt="@/yuentsz123"
      />
      <ImageBoard />
      <Section color="white" disableLazy>
        <template v-slot:left>
          <h2 class="twitter-title row">
            <span class="col-12 col-md-6 text-md-right py-0 px-0"
              >最新官方Twitter</span
            >
            <span class="col-12 col-md-6 px-0 py-0">
              <a
                href="https://twitter.com/MyaVtuber?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-show-count="true"
                >Follow @MyaVtuber</a
              >
            </span>
          </h2>
          <v-container>
            <div class="twitter">
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
          <v-parallax
            class="full-banner"
            src="/img/fullwidth2.jpg"
            alt="綽貓喵CheukCat🍣-【HKVtuber】"
          />
        </template>
      </Section>
      <FSection>
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
      <Section color="text-left" disableAnimate>
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
          <div class="glass-bg-effect">
            <p class="white--text">
              米亞的主人，香港本土音樂創作人及畫師
              <br />
              負責照顧米亞的飲食起居
            </p>
            <p class="white--text mb-2">音樂作品:</p>
            <ul class="white--text mb-6">
              <li>17歲那年 我們一起看過的流星</li>
              <li>不開心症後群</li>
              <li>講你知123！</li>
              <li>失憶症後群 (尚未推出)</li>
            </ul>
            <p class="white--text mb-2">繪本作品</p>
            <ul class="white--text">
              <li>《甘米！動物朋友仔》</li>
            </ul>
          </div>
        </template>
        <template v-slot:right>
          <div class="d-flex flex-column justify-center h-100">
            <Gummy />
            <div class="text-center">
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
                    dark
                    class="mb-5"
                    block
                  >
                    Instagram
                  </v-btn>
                  <v-btn
                    href="https://twitter.com/gummy_forest"
                    target="_blank"
                    dark
                    class="mb-5"
                    block
                  >
                    Twitter
                  </v-btn>
                  <v-btn
                    href="https://www.youtube.com/channel/UCfllDiny72kp9ppGDdaBGWQ"
                    target="_blank"
                    dark
                    class="mb-5"
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
              <a
                data-chrome="noborders noheader nofooter noscrollbar"
                data-tweet-limit="3"
                class="twitter-timeline"
                href="https://twitter.com/gummy_forest?ref_src=twsrc%5Etfw"
                >Tweets by Gummy</a
              >
            </v-col>
          </v-row>
        </v-container>
      </FSection>
      <FSection color="white">
        <v-container>
          <p class="text-h4 mb-0">院友期待你的加入！</p>
          <NuxtLink class="mb-0" to="/thanks">特別感謝院友名單</NuxtLink>
        </v-container>
      </FSection>
    </div>
  </div>
</template>
<script>
import { mdiCart, mdiDiscord, mdiTwitter } from "@mdi/js";
import Particles from "particles.vue";
import Vue from "vue";
Vue.use(Particles);
export default {
  name: "indexView",
  components: {
    Banner: () => import("../components/Home/Banner.vue"),
    Gummy: () => import("../components/Home/gummy-vid.vue"),
    Glitch: () => import("../components/Home/glitch.vue"),
    Section: () => import("../components/Home/SecondarySection.vue"),
    FSection: () => import("../components/Home/FullSection.vue"),
    ImageBoard: () => import("../components/Home/ImageBoard.vue"),
  },
  data() {
    return {
      mdiCart,
      mdiDiscord,
      mdiTwitter,
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
  mounted() {
    const twitter = "https://platform.twitter.com/widgets.js";
    const s = document.createElement("script");
    s.setAttribute("src", twitter);
    document.head.appendChild(s);
  },
};
</script>
<style scoped>
@media (max-width: 390px) {
  .text-banner .text-h6 {
    font-size: 4.5vw !important;
  }
  #particle-bg {
    height: 100%;
  }
}
.background-gummy {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -5;
}

.glass-bg-effect {
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
}
.bg-white {
  background-color: white;
  min-height: 55px;
  z-index: 1;
  position: relative;
  overflow: hidden;
}
.full-banner {
  min-height: 80vh;
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
</style>
