<template>
  <FSection color="#f8bbd0">
    <v-container>
      <h2>院友作品</h2>
      <p>來自院友關於米亞的Fan Art</p>
      <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
      <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
      <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
      <p v-if="patients.length < 1">
        無啊，頂都無人放卑我，睇咩睇啦，走開啦，躝返上去啊！
      </p>
      <v-row v-else>
        <v-col cols="12" md="4" lg="3" v-for="(data, index) in patients" :key="'preview_' + index">
          <v-card class="twitterName" target="__blank" flat :href="
            'https://www.twitter.com/' +
            data.UserAccountUserName +
            '/status/' +
            data.PostId
          ">
            <v-img class="mb-3 bg-dark" contain height="300" :src="data.ImageUrl + '?format=jpg&name=240x240'" />
            <v-card-text>
              {{ data.UserAccountName }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </FSection>
</template>
<script>
import { mdiChevronDown } from "@mdi/js";
import FSection from "./FullSection.vue"
import axios from 'axios';
export default {
  components: {
    FSection,
  },
  data() {
    return {
      mdiChevronDown,
      patients: [],
    };
  },
  async mounted() {
    const tempData = await axios
      .get("https://www.mya-hkvtuber.com/api/mya/gettweets");
    this.patients = tempData.data
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 20);
  },
};
</script>
<style scoped>
.bg-dark {
  background: black;
}

.twitterName {
  text-decoration: none;
  height: 100%;
  transition: all .3s linear;
}

.twitterName:hover {
  transform: scale(1.1);
  z-index: 1;
  box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 0.7);
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
