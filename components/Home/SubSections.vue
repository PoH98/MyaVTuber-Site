<template>
  <div class="subsections">
    <section v-for="(data, i) in subsection" :key="'section_' + i">
      <Section
        v-if="data.type === '左右' && i % 2 === 0"
        :color="data['background-color']"
        :mobileReverse="true"
      >
        <template v-slot:left>
          <div class="text-md-left d-flex flex-column justify-center h-100">
            <div :class="getContrastYIQ(data['background-color'])" v-html="data.content"></div>
            <div>
              <v-btn
                v-if="data.button"
                x-large
                target="_blank"
                rounded
                class="px-13 mt-5"
                :href="data.button"
              >
                <v-img
                  class="mr-2"
                  :src="'/icons/' + data['button-icon'] + '.svg'"
                />
                {{ data["button-text"] }}
              </v-btn>
            </div>
          </div>
        </template>
        <template v-slot:right>
          <v-flex
            class="justify-center h-100 align-center"
            v-if="data['background-image']"
          >
            <v-img
              contain
              class="section-img"
              :src="data['background-image']"
            />
          </v-flex>
          <p class="mt-10 mb-10" v-else>暫時無圖片</p>
        </template>
      </Section>
      <Section
        v-else-if="data.type === '左右' && i % 2 !== 0"
        :color="data['background-color']"
      >
        <template v-slot:left>
          <v-flex
            class="justify-center h-100 align-center"
            v-if="data['background-image']"
          >
            <v-img
              contain
              class="section-img"
              :src="data['background-image']"
            />
          </v-flex>
          <p class="mt-10 mb-10" v-else>暫時無圖片</p>
        </template>
        <template v-slot:right>
          <div class="text-md-right d-flex flex-column justify-center h-100">
            <div :class="getContrastYIQ(data['background-color'])" v-html="data.content"></div>
            <div>
              <v-btn
                v-if="data.button"
                x-large
                target="_blank"
                rounded
                class="px-13 mt-5"
                :href="data.button"
              >
                <v-img
                  class="mr-2"
                  :src="'/icons/' + data['button-icon'] + '.svg'"
                />
                {{ data["button-text"] }}
              </v-btn>
            </div>
          </div>
        </template>
      </Section>
      <FSection
        :color="data['background-color']"
        :image="data['background-image']"
        v-else
      >
        <v-container>
          <div :class="'content ' + getContrastYIQ(data['background-color'])" v-html="data.content"></div>
        </v-container>
      </FSection>
    </section>
  </div>
</template>
<script>
export default {
  components: {
    Section: () => import("~/components/Home/SecondarySection.vue"),
    FSection: () => import("~/components/Home/FullSection.vue"),
  },
  props: {
    subsection: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getContrastYIQ(hexcolor) {
      hexcolor = hexcolor.replace("#", "");
      var r = parseInt(hexcolor.substr(0, 2), 16);
      var g = parseInt(hexcolor.substr(2, 2), 16);
      var b = parseInt(hexcolor.substr(4, 2), 16);
      var yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? "black--text" : "white--text";
    },
  },
};
</script>
<style scoped>
.section-img {
  max-height: 300px;
  max-width: 100%;
}
.h-100 {
  height: 100%;
}
</style>