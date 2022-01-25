<template>
  <div>
    <banner />
    <div class="bg-white">
      <Section :mobileReverse="true">
        <template v-slot:left>
          <div
            class="text-md-left d-flex flex-column justify-center"
            style="height: 100%"
          >
            <h2>米亞の飛天奶茶商店</h2>
            <p class="mb-0">精美的周邊產品望來依到啊！！</p>
            <p>絕對可以買到你破產！！</p>
            <div>
              <v-btn
                x-large
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
          <v-img src="@/assets/flyingmilktea.jpg" />
        </template>
      </Section>
      <Section color="white">
        <template v-slot:left>
          <div class="px-8 py-8 d-flex justify-center">
            <v-img src="@/assets/discordicon.png" width="300px" />
          </div>
        </template>
        <template v-slot:right>
          <div
            class="text-md-right d-flex flex-column justify-center"
            style="height: 100%"
          >
            <h2>米亞のDiscord Server</h2>
            <p class="mb-0">官方Discord Server，歡迎大家</p>
            <p>入來認識更多院友啦！</p>
            <div>
              <v-btn
                x-large
                rounded
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
      <v-parallax
        class="full-banner"
        src="@/assets/fullwidth.jpg"
        alt="@/yuentsz123"
      />
      <FSection>
        <v-container>
          <h1 class="white--text">院友作品</h1>
          <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
          <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
          <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
          <p>無啊，頂都無人放卑我，睇咩睇啦，走開啦，躝返上去啊！</p>
        </v-container>
      </FSection>
      <Section color="white">
        <template v-slot:left>
          <h1 class="twitter-title row">
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
          </h1>
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
            src="@/assets/fullwidth2.jpg"
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
          <p class="text-right by">講你知123 by 米亞</p>
        </v-container>
      </FSection>
      <FSection color="white">
        <v-container>
          <p class="text-h4 mb-0">院友期待你的加入！</p>
          <router-link class="mb-0" :to="{ name: 'Thanks' }"
            >特別感謝院友名單</router-link
          >
        </v-container>
      </FSection>
    </div>
  </div>
</template>
<script>
import { mdiChevronDown, mdiCart, mdiDiscord } from '@mdi/js'
export default {
  components: {
    Banner: () => import("../components/Home/Banner.vue"),
    Section: () => import("../components/Home/SecondarySection.vue"),
    FSection: () => import("../components/Home/FullSection.vue"),
  },
  data(){
    return{
      mdiChevronDown,
      mdiCart,
      mdiDiscord
    }
  },
  beforeCreate() {
    const twitter = "https://platform.twitter.com/widgets.js";
    var s = document.createElement("script");
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
.twitter {
  max-height: 650px;
  overflow: auto;
}
.twitter-follow-button {
  background-color: #1d9bf0;
  color: #fff;
  border-radius: 9999px;
  padding: 1px 12px 1px 12px;
  height: 20px;
  font-size: 12px;
}
.by {
  width: 80%;
}
.down {
  -webkit-animation: pulse 1.5s 0s infinite normal ease forwards;
  -moz-animation: pulse 1.5s 0s infinite normal ease forwards;
  -o-animation: pulse 1.5s 0s infinite normal ease forwards;
  animation: pulse 1.5s 0s infinite normal ease forwards;
}
@-webkit-keyframes pulse {
  0% {
    opacity: 0;
    background-position: center top;
    -moz-background-size: 0 auto;
    -o-background-size: 0 auto;
    -webkit-background-size: 0 auto;
    background-size: 0 auto;
  }
  10% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    -moz-background-size: 20% auto;
    -o-background-size: 20% auto;
    -webkit-background-size: 20% auto;
    background-size: 20% auto;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    background-position: center bottom;
    -moz-background-size: 0 auto;
    -o-background-size: 0 auto;
    -webkit-background-size: 0 auto;
    background-size: 0 auto;
  }
}
@-moz-keyframes pulse {
  0% {
    opacity: 0;
    background-position: center top;
    -moz-background-size: 0 auto;
    -o-background-size: 0 auto;
    -webkit-background-size: 0 auto;
    background-size: 0 auto;
  }
  10% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    -moz-background-size: 20% auto;
    -o-background-size: 20% auto;
    -webkit-background-size: 20% auto;
    background-size: 20% auto;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    background-position: center bottom;
    -moz-background-size: 0 auto;
    -o-background-size: 0 auto;
    -webkit-background-size: 0 auto;
    background-size: 0 auto;
  }
}
@-ms-keyframes pulse {
  0% {
    opacity: 0;
    background-position: center top;
    -moz-background-size: 0 auto;
    -o-background-size: 0 auto;
    -webkit-background-size: 0 auto;
    background-size: 0 auto;
  }
  10% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    -moz-background-size: 20% auto;
    -o-background-size: 20% auto;
    -webkit-background-size: 20% auto;
    background-size: 20% auto;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    background-position: center bottom;
    -moz-background-size: 0 auto;
    -o-background-size: 0 auto;
    -webkit-background-size: 0 auto;
    background-size: 0 auto;
  }
}
@keyframes pulse {
  0% {
    opacity: 0;
    background-position: center top;
    -moz-background-size: 0 auto;
    -o-background-size: 0 auto;
    -webkit-background-size: 0 auto;
    background-size: 0 auto;
  }
  10% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    -moz-background-size: 20% auto;
    -o-background-size: 20% auto;
    -webkit-background-size: 20% auto;
    background-size: 20% auto;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    background-position: center bottom;
    -moz-background-size: 0 auto;
    -o-background-size: 0 auto;
    -webkit-background-size: 0 auto;
    background-size: 0 auto;
  }
}
</style>