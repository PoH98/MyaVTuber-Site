<template>
  <div id="app">
    <v-app>
      <v-app-bar fixed max-height="64px">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="nav-main">
          <v-btn plain to="/" class="nav-item">
            <h1>米亞MYA</h1>
          </v-btn>
        </div>
        <v-spacer />
        <v-btn
          plain
          class="d-none d-md-block"
          v-if="!$vuetify.theme.dark"
          @click="$vuetify.theme.dark = true"
        >
          Darkmode
        </v-btn>
        <v-btn
          class="d-none d-md-block"
          v-else
          plain
          @click="$vuetify.theme.dark = false"
        >
          Lightmode
        </v-btn>
        <span class="d-md-flex d-none" v-if="showCelebrate">
          <v-icon class="mr-2">{{ mdiPartyPopper }}</v-icon>
          <p class="text-h6">恭喜米亞{{ status.subscriberCount }}訂閱!!</p>
        </span>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" class="text-left" temporary fixed>
        <v-list-item class="my-3">
          <v-list-item-content>
            <v-list-item-title class="text-h5"> 米亞MYA </v-list-item-title>
            <v-list-item-subtitle> 一名來自香港的VTuber </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item to="/" link>
              <v-list-item-icon>
                <v-icon>{{ mdiHome }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>米亞</v-list-item-title>
            </v-list-item>
            <v-list-item to="/gummy" link>
              <v-list-item-icon>
                <v-icon>{{ mdiAccount }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>甘米主人</v-list-item-title>
            </v-list-item>

            <v-list-item to="/teahouse" link>
              <v-list-item-icon>
                <v-icon>{{ mdiCoffee }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>幻花茶屋</v-list-item-title>
            </v-list-item>

            <v-list-item to="/mya-meme" link>
              <v-list-item-icon>
                <v-icon>{{ mdiBook }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>米亞梗字典</v-list-item-title>
            </v-list-item>

            <v-list-item to="/achievement" link>
              <v-list-item-icon>
                <v-icon>{{ mdiTrophy }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>路程杯</v-list-item-title>
            </v-list-item>

            <v-list-item to="/games" link>
              <v-list-item-icon>
                <v-icon>{{ mdiGoogleController }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>院友自製遊戲</v-list-item-title>
            </v-list-item>

            <v-list-item to="/thanks" link>
              <v-list-item-icon>
                <v-icon>{{ mdiPartyPopper }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>特別感謝</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>
            <v-list-item :ripple="false" disabled>
              <v-list-item-content>
                <v-list-item-title> 米亞の外部鏈接 </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item
              target="_blank"
              href="https://www.youtube.com/channel/UCVDrzfo7NnOvNx8dU-Ebitg"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ mdiYoutube }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Youtube</v-list-item-title>
            </v-list-item>

            <v-list-item
              href="https://twitter.com/MyaVtuber"
              target="_blank"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ mdiTwitter }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Twitter</v-list-item-title>
            </v-list-item>

            <v-list-item
              href="https://www.instagram.com/mya_vtuber/"
              target="_blank"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ mdiInstagram }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Instagram</v-list-item-title>
            </v-list-item>

            <v-list-item href="https://mya.baguhkv.com/edit" target="_blank">
              <v-list-item-icon>
                <v-icon>{{ mdiFoodDrumstick }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>烤肉</v-list-item-title>
            </v-list-item>
            <v-list-item href="https://dd-paradise.net/" target="_blank" link>
              <v-list-item-icon>
                <v-icon>{{ mdiMinecraft }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Minecraft</v-list-item-title>
            </v-list-item>
            <v-list-item
              href="https://discord.com/invite/erB5AW9Vrp"
              target="_blank"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ mdiDiscord }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Discord</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          <v-divider class="d-md-none mt-5"></v-divider>
          <v-list-item-group class="d-md-none pt-3">
            <v-btn
              plain
              block
              v-if="!$vuetify.theme.dark"
              @click="$vuetify.theme.dark = true"
            >
              Darkmode
            </v-btn>
            <v-btn v-else plain block @click="$vuetify.theme.dark = false">
              Lightmode
            </v-btn>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main class="pt-15">
        <Nuxt />
        <Particles
          id="snow"
          v-if="showSnow"
          :options="snow"
          :particlesLoaded="particlesLoaded"
        />
        <v-dialog v-model="specialCelebrate.showSpecialModel" max-width="500">
          <v-card>
            <v-card-title> 米亞再次達成突破性路程杯啦！！ </v-card-title>
            <v-card-text>
              <span
                class="d-md-flex d-none"
                v-if="specialCelebrate.showSpecialCelebrate"
              >
                <v-icon class="mr-2">{{ mdiPartyPopper }}</v-icon>
                <p class="text-h6">
                  {{ specialCelebrate.specialCelebrateText }}
                </p>
                <v-icon class="mr-2">{{ mdiPartyPopper }}</v-icon>
              </span>
            </v-card-text>
            <v-card-actions class="justify-space-between">
              <v-btn
                color="red"
                class="w-50"
                @click="specialCelebrate.showSpecialModel = false"
              >
                關閉
              </v-btn>
              <v-btn
                color="pink"
                class="w-50"
                to="/celebrate3Dsuccess"
                @click="specialCelebrate.showSpecialModel = false"
              >
                精彩彩蛋
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-main>
      <v-footer app class="px-md-15" absolute>
        <p class="mb-0 py-5 footer">
          Crafted By <a href="https://github.com/PoH98">PoH98</a>,
          <a href="https://github.com/sawaYch">Sawa</a>
        </p>
        <v-spacer />
        <div class="footer">
          Copyright MIT License<br /><a
            href="https://github.com/PoH98/MyaVTuber-Site"
            >Github Source Code</a
          >
        </div>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
import Particles from "particles.vue";
import {
  mdiYoutube,
  mdiTwitter,
  mdiInstagram,
  mdiMinecraft,
  mdiAccount,
  mdiCoffee,
  mdiHome,
  mdiFoodDrumstick,
  mdiGoogleController,
  mdiPartyPopper,
  mdiTrophy,
  mdiBook,
  mdiDiscord,
} from "@mdi/js";
import config from "@/plugins/specialEvent.json";
import Vue from "vue";
Vue.use(Particles);
export default {
  name: "defaultLayout",
  data() {
    return {
      drawer: false,
      mdiYoutube,
      mdiTwitter,
      mdiInstagram,
      mdiMinecraft,
      mdiAccount,
      mdiCoffee,
      mdiHome,
      mdiFoodDrumstick,
      mdiGoogleController,
      mdiPartyPopper,
      mdiBook,
      mdiTrophy,
      mdiDiscord,
      celebrate: [
        10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
        200000, 3000000, 400000, 5000000, 600000, 700000, 800000, 900000,
        1000000,
      ],
      showCelebrate: false,
      specialCelebrate: {},
      showSnow: false,
      snow: {
        background: {
          color: "#00000000",
        },
        fpsLimit: 30,
        particles: {
          color: {
            value: "#fff",
          },
          move: {
            bounce: !1,
            direction: "bottom",
            enable: !0,
            random: !1,
            straight: !1,
          },
          opacity: {
            random: true,
            value: {
              min: 0.5,
              max: 1,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 2,
            },
            value: 5,
          },
        },
      },
    };
  },
  computed: {
    status() {
      return this.$store.state.sharedData.status;
    },
  },
  watch: {
    $route() {
      const event = new Event("changePage");
      document.dispatchEvent(event);
    },
  },
  methods: {
    particlesLoaded() {
      setTimeout(() => {
        const snow = document.querySelector("canvas");
        snow.style.zIndex = "1";
        snow.style.background = "transparent";
      }, 500);
    },
  },
  async mounted() {
    this.specialCelebrate = config;
    window.addEventListener("auxclick", (event) => {
      if (event.button === 1) event.preventDefault();
    });
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;
    }
    const month = new Date().getMonth() + 1;
    await this.$store.dispatch("sharedData/fetchYTData");
    if (process.client) {
      //subscribers celebrate or mya birthday celebrate
      if (!document.getElementById("confetti-canvas")) {
        if (this.celebrate.includes(parseInt(this.status.subscriberCount))) {
          this.showCelebrate = true;
          const VueConfetti = await import("vue-confetti");
          this.$confetti = new VueConfetti.Confetti();
          if (window.innerWidth > 480) {
            this.$confetti.start({
              defaultSize: 5,
              particlesPerFrame: 0.1,
              windSpeedMax: 0,
              defaultDropRate: 2,
            });
          } else {
            this.$confetti.start({
              defaultSize: 5,
              particlesPerFrame: 0.05,
              windSpeedMax: 0,
              defaultDropRate: 2,
            });
          }
        }
        if (this.specialCelebrate.showSpecialCelebrate) {
          if (this.$route.name !== "celebrate3Dsuccess") {
            this.specialCelebrate.showSpecialModel = true;
          }
          const VueConfetti = await import("vue-confetti");
          this.$confetti = new VueConfetti.Confetti();
          if (window.innerWidth > 480) {
            this.$confetti.start({
              defaultSize: 5,
              particlesPerFrame: 0.1,
              windSpeedMax: 0,
              defaultDropRate: 2,
            });
          } else {
            this.$confetti.start({
              defaultSize: 5,
              particlesPerFrame: 0.05,
              windSpeedMax: 0,
              defaultDropRate: 2,
            });
          }
        }
      }
      // month will reduce 1 at here so we add 1 for real world month
      if (month <= 2 || month == 12) {
        this.showSnow = true;
      }
    }
  },
};
</script>
<style scoped>
.nav-item {
  margin-left: 5px;
  margin-right: 5px;
}
.footer {
  font-size: 10px;
}
@media (min-width: 720px) {
  .nav-item {
    min-width: 100px !important;
  }
}
@media (max-width: 480px) {
  .nav-main {
    min-width: 80%;
    align-items: center;
    display: flex;
  }
  .nav-main .home {
    min-width: 100% !important;
  }
}
</style>
<style lang="scss">
body {
  max-width: 100vw;
}
#confetti-canvas {
  z-index: 1;
}

#app {
  font-family: "Montserrat", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  max-width: 100vw;
  user-select: none;

  #snow {
    z-index: 1;
    background: transparent;
    position: fixed;
    inset: 0;
    canvas {
      background: transparent !important;
    }
  }
  .v-list-item__icon:first-child {
    margin-right: 32px;
  }
  p {
    margin-bottom: 0;
  }
  @media (min-width: 1904px) {
    .container {
      max-width: 1185px !important;
    }
  }
  .home {
    border: 3px solid currentColor !important;
    padding: 10px 32px !important;
  }
  .home * {
    font-size: 30px;
  }
  .home:before {
    background-color: white !important;
  }
  .img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  #gummy-vid {
    top: -55px;
    left: -10px;
    right: 0;
    width: calc(100% + 20px);
    height: 420px;
    opacity: 1;
  }
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #ff00bb #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 14px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ff00bb;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  .theme--dark.v-sheet a {
    color: white;
  }
}
.v-responsive__content {
  margin-left: -100% !important;
}
.w-50 {
  width: 49%;
}
</style>
