<template>
  <FSection>
    <v-container>
      <h2 class="white--text">院友作品</h2>
      <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
      <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
      <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
      <p v-if="list.length < 1">無啊，頂都無人放卑我，睇咩睇啦，走開啦，躝返上去啊！</p>
      <v-row v-else>
          <v-col v-for="(data, index) in list" :key="'preview_' + index">
            <v-img :lazy-src="data.img"/>
            <p v-if="!data.link">{{ data.author }}</p>
            <a v-else :href="data.link">{{ data.author }}</a>
          </v-col>
      </v-row>
    </v-container>
  </FSection>
</template>
<script>
import { mdiChevronDown } from '@mdi/js'
export default {
    components:{
        FSection: () => import("./FullSection.vue")
    },
    data(){
        return{
            mdiChevronDown,
            list:[]
        }
    }
}
</script>
<style scoped>

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