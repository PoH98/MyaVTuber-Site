<template>
  <div class="w-100">
    <video ref="videoPlayer" class="video-js w-100 mx-auto"></video>
  </div>
</template>

<script>
// The site plays MP4 files, so it does not need the HLS/DASH streaming bundle.
import videojs from "video.js/dist/alt/video.core.js";
import "video.js/dist/video-js.css"
export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log("onPlayerReady", this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
<style scoped>
.w-100{
  width: 100%;
}
</style>
