<template>
  <div :class="color + ' py-15'" data-aos="fade-down" data-aos-duration="2000">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" :order="mobileReverse?'last':'first'" order-md="first">
          <slot name="left" />
        </v-col>
        <v-col cols="12" md="6" :order="mobileReverse?'first':'last'" order-md="last">
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
      },
      mobileReverse:{
        type: Boolean,
        default:() => { return false }        
      }
  },
};
</script>