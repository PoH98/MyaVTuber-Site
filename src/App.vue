<template>
  <div id="app">
    <v-app>
      <v-app-bar app elevation="0">
        <v-container class="d-flex">
          <div class="d-none d-lg-block">
            <v-btn
              plain
              target="_blank"
              href="https://www.youtube.com/channel/UCVDrzfo7NnOvNx8dU-Ebitg"
              class="nav-item"
            >
              <v-icon class="mr-2">{{ mdiYoutube }}</v-icon>
              Youtube
            </v-btn>
            <v-btn
              plain
              target="_blank"
              href="https://twitter.com/MyaVtuber"
              class="nav-item"
            >
              <v-icon class="mr-2">{{ mdiTwitter }}</v-icon>
              Twitter
            </v-btn>
            <v-btn
              plain
              target="_blank"
              href="https://www.instagram.com/mya_vtuber/"
              class="nav-item"
            >
              <v-icon class="mr-2">{{ mdiInstagram }}</v-icon>
              Instagram
            </v-btn>
          </div>
          <v-spacer />
          <div class="nav-main">
            <v-btn
              outlined
              :to="{ name: 'Home' }"
              class="nav-item red--text home"
            >
              <h1>MYA</h1>
            </v-btn>
          </div>
          <v-spacer />
          <div class="d-lg-none">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </div>
          <div class="d-none d-lg-block">
            <v-btn
              plain
              href="https://mya.baguhkv.com/"
              target="_blank"
              class="nav-item"
            >
              <v-icon class="mr-2">{{ mdiFoodDrumstick }}</v-icon>
              烤肉
            </v-btn>
            <v-btn
              plain
              target="_blank"
              href="https://sites.google.com/view/mya-minecraft/home?authuser=0"
              class="nav-item"
            >
              <v-icon class="mr-2">{{ mdiMinecraft }}</v-icon>
              Minecraft Server
            </v-btn>
          </div>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" fixed temporary class="d-lg-none">
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item
              target="_blank"
              href="https://www.youtube.com/channel/UCVDrzfo7NnOvNx8dU-Ebitg"
            >
              <v-list-item-title
                ><v-icon class="mr-2">{{ mdiYoutube }}</v-icon
                >Youtube</v-list-item-title
              >
            </v-list-item>

            <v-list-item href="https://twitter.com/MyaVtuber" target="_blank">
              <v-list-item-title
                ><v-icon class="mr-2">{{ mdiTwitter }}</v-icon
                >Twitter</v-list-item-title
              >
            </v-list-item>

            <v-list-item
              href="https://www.instagram.com/mya_vtuber/"
              target="_blank"
            >
              <v-list-item-title
                ><v-icon class="mr-2">{{ mdiInstagram }}</v-icon
                >Instagram</v-list-item-title
              >
            </v-list-item>

            <v-list-item href="https://mya.baguhkv.com/" target="_blank">
              <v-list-item-title
                ><v-icon class="mr-2">{{ mdiFoodDrumstick }}</v-icon
                >烤肉</v-list-item-title
              >
            </v-list-item>
            <v-list-item
              href="https://sites.google.com/view/mya-minecraft/home?authuser=0"
              target="_blank"
            >
              <v-list-item-title
                ><v-icon class="mr-2">{{ mdiMinecraft }}</v-icon
                >Minecraft</v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view />
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
  mdiFoodDrumstick,
} from "@mdi/js";
export default {
  data() {
    return {
      drawer: false,
      mdiYoutube,
      mdiTwitter,
      mdiInstagram,
      mdiMinecraft,
      mdiFoodDrumstick,
    };
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
  font-family: "Noto Sans HK", sans-serif !important;
  font-family: "Orbitron", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  max-width: 100vw;
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
</style>
