<template>
  <v-container>
    <v-btn @click="Draw"> Test Draw </v-btn>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      connection: null,
      player: {},
      joinedRoom: {},
    };
  },
  methods: {
    Draw() {
      this.connection.invoke("DrawCard", this.player.player);
    },
  },
  mounted() {
    //get room id
    let id = this.$route.params.advgame;
    const signalR = require("@microsoft/signalr");
    console.log(signalR);
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("/advhub")
      .build();

    //connected
    this.connection.on("Connected", (data) => {
      this.player = data;
      this.connection.invoke("JoinRoom", {
        Guid: this.$route.params.advgame,
      });
    });

    //player join or create room success
    this.connection.on("PlayerSuccess", (data) => {
      this.joinedRoom = data;
      console.log(this.joinedRoom);
    });

    this.connection.start().then(() => {
      this.connection.invoke("Connect");
    });
  },
};
</script>