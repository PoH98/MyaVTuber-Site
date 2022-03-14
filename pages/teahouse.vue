<template>
  <div class="tea-house">
    <v-img
      gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
      class="big-banner align-center"
      alt="幽"
      src="/img/teahousebanner.jpg"
    >
      <h1 class="white--text banner-title">
        <span class="showup">歡迎</span>
        <span class="reveal">來到幻花茶屋</span>
      </h1>
    </v-img>
    <bannervid />
    <full-section color="#f8bbd0">

    </full-section>
    <sub-sections />
  </div>
</template>
<script>
import bannervid from "@/components/Teahouse/bannervid.vue";
import SubSections from "../components/Home/SubSections.vue";
import FullSection from '../components/Home/FullSection.vue';
export default {
  components: { bannervid, SubSections, FullSection },
};
</script>
<style scoped>
.tea-house {
  min-height: 100vh;
}
.big-banner {
  height: 90vh;
  z-index: 1;
}
.full-banner {
  min-height: 60vh;
}
.showup {
  animation: showup 7s;
}
.reveal {
  animation: slidein 7s;
  margin-left: -10px;
}
.banner-title {
  position: relative;
}
.banner-title::after {
  position: absolute;
  content: " ";
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  animation: lineAnimation 7s;
}
@keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
}

@keyframes lineAnimation {
  0% {
    opacity: 0;
    right: 100vw;
  }
  50% {
    opacity: 1;
    right: 0;
  }
}

@keyframes slidein {
  0% {
    opacity: 0;
    width: 0px;
    margin-left: -800px;
  }
  20% {
    width: 0px;
    margin-left: -800px;
  }
  35% {
    opacity: 0;
    width: 355px;
    margin-left: -10px;
  }
  80% {
    opacity: 1;
  }
  100% {
    width: 355px;
    margin-left: -10px;
  }
}
</style>