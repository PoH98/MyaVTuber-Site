<template>
  <div
    :class="disablePadding ? 'fsec' : 'fsec py-15'"
    :style="'background-color: ' + color"
  >
    <v-parallax v-if="image" class="background-image" :src="image" />
    <div :class="image?'content with-image':'content'">
      <slot name="default" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: () => {
        return "#fff";
      },
    },
    image: {
      type: String,
    },
    disablePadding: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  }
};
</script>
<style scoped>
.fsec {
  position: relative;
}
.background-image {
  position: absolute;
  inset: 0;
}
.background-image::after {
  content: " ";
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}
.content{
  position: relative;
}
.with-image{
  color: white;
}
</style>