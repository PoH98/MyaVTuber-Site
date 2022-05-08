<template>
  <FSection color="#f8bbd0">
    <v-container>
      <h2>院友作品</h2>
      <P>來自院友關於米亞的Fan Art</P>
      <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
      <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
      <v-icon class="white--text down">{{ mdiChevronDown }}</v-icon>
      <p v-if="patients.length < 1">
        無啊，頂都無人放卑我，睇咩睇啦，走開啦，躝返上去啊！
      </p>
      <v-row v-else>
        <v-col
          cols="12"
          md="4"
          lg="3"
          v-for="(data, index) in patients"
          :key="'preview_' + index"
        >
          <v-img height="300" contain :src="data.img" />
          <p v-if="!data.link">{{ data.author }}</p>
          <a v-else :href="data.link">{{ data.author }}</a>
        </v-col>
      </v-row>
    </v-container>
  </FSection>
</template>
<script>
import { mdiChevronDown } from "@mdi/js";
export default {
  components: {
    FSection: () => import("./FullSection.vue"),
  },
  data() {
    return {
      mdiChevronDown,
      patients: [],
    };
  },
  async mounted() {
    const tempData = await this.$http.get(
        "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryPatientListContents{id flatData{name works{location img}}}}"
      )
      .then((res) => res.json());
    tempData.data.queryPatientListContents.forEach(patient => {
      patient.flatData.works.forEach(work =>{
        this.patients.push({
          link: "/patient/" + patient.id,
          img: work.img,
          author: patient.flatData.name
        });
      })
    })
    this.patients = this.patients.sort(() => 0.5 - Math.random()).slice(0, 20);
  },
};
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
