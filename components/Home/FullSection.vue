<template>
  <v-lazy v-if="!disableLazy">
    <div :class="color + (disablePadding ? '' : ' py-15')">
      <slot name="default" />
    </div>
  </v-lazy>
  <div v-else :class="color + (disablePadding ? '' : ' py-15')">
    <slot name="default" />
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: () => {
        return 'pink lighten-4'
      },
    },
    disablePadding: {
      type: Boolean,
      default: () => {
        return false
      },
    },
    disableLazy: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  },
}
</script>
