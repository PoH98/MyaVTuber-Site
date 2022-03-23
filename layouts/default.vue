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
            <v-list-item :ripple="false" disabled class="black--text">
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

            <v-list-item href="https://mya.baguhkv.com/" target="_blank">
              <v-list-item-icon>
                <v-icon>{{ mdiFoodDrumstick }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>烤肉</v-list-item-title>
            </v-list-item>
            <v-list-item
              href="https://sites.google.com/view/mya-minecraft/home?authuser=0"
              target="_blank"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ mdiMinecraft }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Minecraft</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main class="pt-15">
        <Nuxt />
      </v-main>
      <v-footer app class="px-md-15" absolute>
        <p class="mb-0 py-5 footer">
          Crafted By <a href="https://github.com/PoH98">PoH98</a>
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
  mdiBook,
} from "@mdi/js";
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
    };
  },
  watch: {
    $route() {
      const event = new Event("changePage");
      document.dispatchEvent(event);
    },
  },
  mounted() {
    window.addEventListener("auxclick", (event) => {
      if (event.button === 1) event.preventDefault();
    });
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
#app {
  font-family: "Orbitron", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  max-width: 100vw;
  user-select: none;
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
}
.v-responsive__content {
  margin-left: -100% !important;
}
</style>
