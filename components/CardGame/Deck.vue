<template>
  <v-card @click="draw">
    <img src="" />
  </v-card>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    player: {
      type: Object,
      required: true,
    },
  },
  methods: {
    draw() {
      if (this.modelValue.currentPlayer.id !== this.player.id) {
        //not player's turn
        return;
      }
      //call API
    },
  },
};
</script>