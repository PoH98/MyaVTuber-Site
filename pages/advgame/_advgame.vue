<template>
  <v-container> </v-container>
</template>
<script>
export default {
  data() {
    return {
      connection: null,
    };
  },
  mounted() {
    //get room id
    let id = this.$route.params.advgame;
    const signalR = require("@microsoft/signalr");
    console.log(signalR);
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("/advhub")
      .build();

    this.connection.on("Connected", (data) => {
      console.log(data);
    });

    this.connection
      .start()
      .then(() => this.connection.invoke("Connect"));
  },
};
</script>