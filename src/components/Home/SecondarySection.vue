<template>
  <div :class="color + ' py-15'" data-aos="fade-down" data-aos-duration="2000">
    <v-container>
      <v-row>
        <v-col cols="6">
          <slot name="left" />
        </v-col>
        <v-col cols="6">
          <slot name="right" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
      color:{
          type: String,
          default:()=>{ return "pink lighten-4" }
      }
  },
};
</script>