<template>
  <v-sheet class="subsections">
    <section v-for="(data, i) in subsection" :key="'section_' + i">
      <Section
        v-if="data.type === '左右' && i % 2 === 0"
        :color="data['backgroundColor']"
        :linear-color="data['linearBackgroundColor']"
        :mobileReverse="true"
      >
        <template v-slot:left>
          <div class="text-md-left d-flex flex-column justify-center h-100">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              :class="getContrastYIQ(data['backgroundColor'])"
              v-html="data.content"
            ></div>
            <div>
              <v-btn
                v-if="data.button"
                x-large
                target="_blank"
                rounded
                class="px-13 mt-5 mr-2"
                :href="data.button"
              >
                <v-img
                  class="mr-2 custom-icon"
                  :src="'/icons/' + data['buttonIcon'] + '.svg'"
                />
                {{ data["buttonText"] }}
              </v-btn>
              <v-btn
                v-if="data.button2"
                x-large
                target="_blank"
                rounded
                class="px-13 mt-5"
                :href="data.button2"
              >
                <v-img
                  class="mr-2 custom-icon"
                  :src="'/icons/' + data['button2Icon'] + '.svg'"
                />
                {{ data["button2Text"] }}
              </v-btn>
            </div>
          </div>
        </template>
        <template v-slot:right>
          <div class="d-flex justify-center h-100 align-center"
            v-if="data['backgroundImage']"
          >
            <v-img contain class="section-img" :src="data['backgroundImage']" />
          </div>
          <p class="mt-10 mb-10" v-else>暫時無圖片</p>
        </template>
      </Section>
      <Section
        v-else-if="data.type === '左右' && i % 2 !== 0"
        :color="data['backgroundColor']"
        :linear-color="data['linearBackgroundColor']"
      >
        <template v-slot:left>
          <div class="d-flex justify-center h-100 align-center"
            v-if="data['backgroundImage']"
          >
            <v-img contain class="section-img" :src="data['backgroundImage']" />
          </div>
          <p class="mt-10 mb-10" v-else>暫時無圖片</p>
        </template>
        <template v-slot:right>
          <div class="text-md-right d-flex flex-column justify-center h-100">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              :class="getContrastYIQ(data['background-color'])"
              v-html="data.content"
            ></div>
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
                  class="mr-2 custom-icon"
                  :src="'/icons/' + data['buttonIcon'] + '.svg'"
                />
                {{ data["buttonText"] }}
              </v-btn>
              <v-btn
                v-if="data.button2"
                x-large
                target="_blank"
                rounded
                class="px-13 mt-5"
                :href="data.button2"
              >
                <v-img
                  class="mr-2 custom-icon"
                  :src="'/icons/' + data['button2Icon'] + '.svg'"
                />
                {{ data["button2Text"] }}
              </v-btn>
            </div>
          </div>
        </template>
      </Section>
      <FSection
        :color="data['backgroundColor']"
        :image="data['backgroundImage']"
        :linear-color="data['linearBackgroundColor']"
        v-else
      >
        <v-container>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            :class="'content ' + getContrastYIQ(data['backgroundColor'])"
            v-html="data.content"
          ></div>
        </v-container>
      </FSection>
    </section>
  </v-sheet>
</template>
<script>
import Section from "~/components/Home/SecondarySection.vue";
import FSection from "~/components/Home/FullSection.vue";
export default {
  components: {
    Section,
    FSection,
  },
  props: {
    subsection: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getContrastYIQ(hexcolor) {
      if (hexcolor && !this.$vuetify.theme.dark) {
        hexcolor = hexcolor.replace("#", "");
        var r = parseInt(hexcolor.substr(0, 2), 16);
        var g = parseInt(hexcolor.substr(2, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? "black--text" : "white--text";
      } else if (!this.$vuetify.theme.dark) {
        return "black--text";
      } else {
        return "white--text";
      }
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
<style lang="scss">
.theme--dark {
  .custom-icon {
    filter: invert(100%);
  }
}
</style>