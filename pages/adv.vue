<template>
  <v-container>
    <v-btn @click="CreateRoom"> Test Create Room </v-btn>
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
    CreateRoom() {
      this.connection.invoke("CreateRoom", {
        Story: {
          StoryName: "Testing",
          StoryDescription: "Testing Room",
          Stories: [
            {
              Description: "Testing Story 1",
              Selection: [
                {
                  ActionName: "Testing Selection 1",
                },
              ],
            },
            {
              Description: "Testing Story 1",
              Selection: [
                {
                  ActionName: "Testing Selection 1",
                },
              ],
            },
          ],
        },
      });
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
      console.log(this.player);
    });

    //player join or create room success
    this.connection.on("PlayerSuccess", (data) => {
      this.$router.push({
        path: 'advgame/' + data.id
      });
    });

    this.connection.start().then(() => this.connection.invoke("Connect"));
  },
};
</script>