<template>
  <v-sheet>
    <v-container class="games">
      <h1>
        <v-icon>{{ mdiController }}</v-icon>
        院友自創遊戲
        <v-icon>{{ mdiController }}</v-icon>
      </h1>
      <p>來自各位觀眾所創作的遊戲列表</p>
      <v-row class="mt-8">
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="(game, i) in content"
          :key="'game_' + i"
        >
          <v-hover v-slot="{ hover }">
            <v-card :href="game.data.url" class="rounded-xl" target="_blank">
              <v-img
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                :class="
                  hover
                    ? 'align-end on-hover t-delay white--text text-h5'
                    : 'align-end t-delay white--text text-h5'
                "
                height="350"
                :src="game.data.image"
              >
                <b>{{ game.data.name }}</b>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
import {mdiController} from '@mdi/js';
import { useHead } from 'unhead';
export default {
  data(){
    return{
      mdiController
    }
  },
  async setup() {
    useHead({
      title: "院友自創遊戲"
    });
    const tempData = await useAsyncData(() => $fetch(
      "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/game/", {
        headers: {
          "X-Flatten": 1,
        },
      }));
    const content = tempData.data.value.items
    return { content };
  }
};
</script>
<style scoped>
.t-delay {
  transition-duration: 0.5s;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.25);
}
.on-hover {
  padding-bottom: 140px !important;
  transform: scale(1.05);
  z-index: 1;
  text-shadow: 1px 1px 2px black;
  box-shadow: 8px 8px 8px 1px rgba(0, 0, 0, 0.5);
}
</style>