<template>
  <div class="py-15 secondary-section" :style="'background-color:' + color">
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
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: () => {
        return "#f8bbd0";
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
