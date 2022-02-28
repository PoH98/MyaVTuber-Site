<template>
  <v-lazy>
    <div
      :class="color + ' py-15 secondary-section'"
      :data-aos="disableAnimate ? '' : 'fade-down'"
      :data-aos-duration="disableAnimate ? 0 : 2000"
    >
      <slot name="before" />
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
            :order="mobileReverse ? 'last' : 'first'"
            order-md="first"
          >
            <slot name="left" />
          </v-col>
          <v-col
            cols="12"
            md="6"
            :order="mobileReverse ? 'first' : 'last'"
            order-md="last"
          >
            <slot name="right" />
          </v-col>
        </v-row>
      </v-container>
      <slot name="after" />
    </div>
  </v-lazy>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: () => {
        return "pink lighten-4";
      },
    },
    mobileReverse: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    disableAnimate: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
};
</script>
<style scoped>
.secondary-section {
  position: relative;
}
</style>