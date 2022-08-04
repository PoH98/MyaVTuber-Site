<template>
  <v-sheet>
    <v-container>
      <v-row>
        <v-col cols="12" lg="7" class="pr-lg-10">
          <v-timeline align-top dense>
            <v-timeline-item color="yellow">
              <v-card outlined elevation="2">
                <v-card-title> 今日 </v-card-title>
                <v-card-text class="text-left">
                  無論今日發生咩事，永遠記得：院友們都會陪著你一起度過！
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              :color="c.flatData.color"
              v-for="(c, i) in content"
              :key="'achivement_' + i"
            >
              <v-card outlined elevation="2">
                <v-img v-if="c.flatData.image" :src="c.flatData.image[0].url + '?width=585'"/>
                <v-card-title>
                  {{ translateDate(c.flatData.date) }}
                </v-card-title>
                <v-card-text class="text-left">
                  <div class="text-body-1">{{ c.flatData.name }}</div>
                  <div v-if="c.flatData.description" class="text-caption">
                    {{ c.flatData.description }}
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col class="d-none d-lg-block pt-8" lg="5">
          <v-card outlined elevation="2" class="h-100">
            <v-card-title class="text-center pb-4 text-h5">紀念墻</v-card-title>
            <hr />
            <v-card-text class="text-h5 pt-5">
              <v-img contain class="my-5" src="/img/MYA_Ver01_Persona_H.jpg" />
              米亞1.0
              <v-img contain class="my-5" src="/img/MYA_Ver02_H.jpg" />
              米亞2.0
              <v-img contain class="my-5" src="/img/MYA_Ver03_Persona.png" />
              米亞3.0
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  async asyncData({ $http }) {
    let data = await $http
      .get(
        "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/graphql?query={queryAchivementContents{flatData{name date color description image { url }}}}"
      )
      .then((res) => res.json());
    const content = data.data.queryAchivementContents.sort((a, b) => {
      return new Date(b.flatData.date) - new Date(a.flatData.date);
    });
    return { content };
  },
  data() {
    return {
      month: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  methods: {
    translateDate(date) {
      let d = new Date(date);
      return (
        d.getDate() + " " + this.month[d.getMonth()] + " " + d.getFullYear()
      );
    },
  },
};
</script>
<style>
.v-timeline--align-top
  .v-timeline-item__body
  > .v-card:not(.v-card--link):before {
  top: 12px;
  left: -10px;
}
.v-timeline:before{
  left: 48px;
}
.v-timeline--align-top .v-timeline-item__body > .v-card:after {
  top: 10px;
  left: -10px;
}
.h-100 {
  height: calc(100% - 25px);
}

.theme--dark.v-sheet--outlined {
  border: thin solid rgba(255, 255, 255, 0.6);
}
</style>