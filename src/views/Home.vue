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
            <h2>飛天奶茶商店</h2>
            <p class="mb-0">精美的周邊產品望來依到啊！！</p>
            <p>絕對可以買到你破產！！</p>
            <div>
              <v-btn
                x-large
                rounded
                class="px-13"
                href="https://market.flyingmilktea.com/shop/113469"
              >
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
            <h2>Discord Server</h2>
            <p class="mb-0">官方Discord Server，歡迎大家</p>
            <p>入來認識更多院友啦！</p>
            <div>
              <v-btn
                x-large
                rounded
                class="px-13"
                href="https://discord.com/invite/erB5AW9Vrp"
              >
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
        <h1 class="white--text">院友作品</h1>
        <v-icon class="white--text down">mdi-chevron-down</v-icon>
        <v-icon class="white--text down">mdi-chevron-down</v-icon>
        <v-icon class="white--text down">mdi-chevron-down</v-icon>
        <p>無啊，頂都無人放卑我，睇咩睇啦，走開啦，躝返上去啊！</p>
      </FSection>
      <FSection color="white">
        <h1>官方Twitter</h1>
        <v-container class="px-md-15">
          <div class="twitter">
            <a
              class="twitter-timeline"
              href="https://twitter.com/MyaVtuber?ref_src=twsrc%5Etfw"
              >Tweets by MyaVtuber</a
            >
          </div>
        </v-container>
      </FSection>
      <v-container class="py-0">
        <v-parallax
          class="full-banner"
          src="@/assets/fullwidth2.jpg"
          alt="綽貓喵CheukCat🍣-【HKVtuber】"
        />
      </v-container>
      <FSection>
        <v-container>
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
export default {
  components: {
    Banner: () => import("../components/Home/Banner.vue"),
    Section: () => import("../components/Home/SecondarySection.vue"),
    FSection: () => import("../components/Home/FullSection.vue"),
  },
};
</script>
<style scoped>
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
  max-height: 600px;
  overflow: auto;
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