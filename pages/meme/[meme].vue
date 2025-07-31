<template>
  <v-sheet class="wiki" v-if="!content.directlink">
    <v-img class="text-left" height="300px" v-if="content.image" :src="content.image"
      gradient="to bottom, rgba(0,0,0,.6), rgba(0,0,0,.2)">
      <v-container>
        <v-btn class="text-white" variant="plain" to="/mya-meme">
          <v-icon> {{ mdiChevronLeft }} </v-icon>Back
        </v-btn>
      </v-container>
    </v-img>
    <v-img class="text-left" height="300px" v-else cover src="/img/sexymya.jpg"
      gradient="to bottom, rgba(0,0,0,.6), rgba(0,0,0,.2)">
      <v-container>
        <v-btn class="text-white" variant="plain" to="/mya-meme">
          <v-icon> {{ mdiChevronLeft }} </v-icon>Back
        </v-btn>
      </v-container>
    </v-img>
    <v-container class="text-left">
      <h1 class="text-center">{{ content.title }}</h1>
      <hr class="mb-5" />
      <div class="content" v-html="content.longdesc"></div>
    </v-container>
    <hr />
    <v-container>
      <v-row>
        <v-btn :class="$vuetify.theme.dark ? 'white--text' : 'dark--text'" plain to="/mya-meme">
          <v-icon> {{ mdiChevronLeft }} </v-icon>Back
        </v-btn>
      </v-row>
    </v-container>
  </v-sheet>
  <v-sheet class="wiki" v-else>
    <v-container class="text-left">
      <v-btn @click="disableTimeout" plain to="/mya-meme">
        <v-icon> {{ mdiChevronLeft }} </v-icon>Back
      </v-btn>
    </v-container>
    <p class="mt-10 font-weight-bold loading text-h4">
      5秒後自動跳轉
      <span class="ball1"></span>
      <span class="ball2"></span>
      <span class="ball3"></span>
    </p>
    <p class="mt-4">
      如果5秒後冇反應，可以點擊以下鏈接：
      <a :href="getLink">
        {{ getLink }}
      </a>
    </p>
  </v-sheet>
</template>
<script setup>
    const route = useRoute();
    const tempData = await useAsyncData(() => $fetch("https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/jokewiki/" +
      route.params.meme,
      { headers: { "X-Flatten": 1 } }));
    const content = tempData.data.value.data;
    useHead({
      title: content.title,
    });
</script>
<script>
import { mdiChevronLeft } from "@mdi/js";
export default {
  data() {
    return {
      mdiChevronLeft,
      timeout: null,
    };
  },
  computed: {
    getLink() {
      return this.content.longdesc.replace(/<[^>]*>/g, "");
    },
  },
  methods: {
    disableTimeout() {
      clearTimeout(this.timeout);
    },
  },
  beforeMount() {
    if (process.client) {
      if (this.content.directlink) {
        window.onpopstate = () => {
          clearTimeout(this.timeout);
        };
        this.timeout = setTimeout(() => {
          window.location.href = this.getLink;
        }, 5000);
      }
    }
  },
};
</script>
<style scoped lang="scss">
.loading {
  animation: colorChange 3s infinite ease-in-out;
  color: #6859a3;

  span {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: black;
    margin: 0 2px;
    display: inline-block;
    background: #6859a3;
  }

  .ball1 {
    z-index: 1;
    animation: bounce 3s infinite ease-in-out;
    -moz-animation: bounce 3s infinite ease-in-out;
    -webkit-animation: bounce 3s infinite ease-in-out;
  }

  .ball2 {
    animation: bounce 3s infinite ease-in-out;
    -moz-animation: bounce 3s infinite ease-in-out;
    -webkit-animation: bounce 3s infinite ease-in-out;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  .ball3 {
    animation: bounce 3s infinite ease-in-out;
    -moz-animation: bounce 3s infinite ease-in-out;
    -webkit-animation: bounce 3s infinite ease-in-out;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
}

@keyframes bounce {

  0%,
  15% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, -20px);
    background: #72c2c2;
  }

  85%,
  100% {
    transform: translate(0, 0);
  }
}

@keyframes colorChange {
  50% {
    color: #72c2c2;
  }
}

//used better css
/*
.wiki {
  .content {
    :deep(.responsive-iframe) {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
/*
      padding-top: 25px;
      height: 0;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}*/
</style>
<style>
.wiki {
  min-height: calc(100vh - 130px);
}

.wiki .content * {
  margin-bottom: 10px !important;
}

.wiki .content iframe {
  position: relative;
  width: 100% !important;
  aspect-ratio: 16 / 9;
  height: 100% !important;
}
</style>
