<template>
  <!-- Slider main container -->
  <div class="swiper" ref="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(el, i) in $slots.default.filter((x) => x.asyncFactory)"
        :key="'slide_' + i"
      >
        <v-nodes v-if="el" :vnodes="el" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination" v-if="dots"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev swiper-button-disabled" v-if="nav"></div>
    <div class="swiper-button-next" v-if="nav"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar" v-if="scrollbar"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
export default {
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  props: {
    nav: {
      type: Boolean,
      default: () => true,
    },
    scrollbar: {
      type: Boolean,
      default: () => false,
    },
    dots: {
      type: Boolean,
      default: () => false,
    },
    breakpoints: {
      type: Object,
      default: () => {},
    },
    speed: {
      type: Number,
      default: () => 300,
    },
    direction: {
      type: String,
      default: () => "horizontal",
    },
    slidesPerView: {
      type: Number,
      default: () => 1,
    },
    autoHeight: {
      type: Boolean,
      default: () => true,
    },
    autoplay: {
      type: Boolean,
      default: () => false,
    },
    spaceBetween: {
      type: Number,
      default: () => 20,
    },
    rows: {
      type: Number,
      default: () => 1,
    },
    centeredSlides: {
      type: Boolean,
      default: () => false,
    },
    loop: {
      type: Boolean,
      default: () => false,
    },
    coverflowEffect: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      swiper: null,
    };
  },
  methods: {
    next() {
      this.swiper.slideNext(this.speed);
    },
  },
  mounted() {
    Swiper.use(Navigation);
    this.swiper = new Swiper(this.$refs.swiper, {
      // Optional parameters
      direction: this.direction,
      speed: this.speed,
      slidesPerView: this.slidesPerView,
      centeredSlides: this.centeredSlides,
      grid: {
        rows: this.rows,
        fill: "row",
      },
      autoplay: this.autoplay,
      spaceBetween: this.spaceBetween,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: this.loop,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      coverflowEffect: this.coverflowEffect,
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      autoHeight: this.autoHeight,
      on: {
        init: () => {
          this.$emit("inited");
        },
        slideChange: () => {
          this.$emit("change", this.swiper.activeIndex);
        },
      },
    });
  },
};
</script>
<style>
.swiper {
  position: relative;
}
.swiper-slide * {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
.swiper .swiper-button-prev,
.swiper .swiper-button-next {
  opacity: 0;
  transition-duration: 0.5s;
  animation-name: bounceAlpha;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.swiper:hover .swiper-button-next,
.swiper:hover .swiper-button-prev {
  opacity: 1;
  animation: none;
}
@media (min-width: 768px) {
  .swiper .swiper-button-next {
    right: 30px;
  }
  .swiper .swiper-button-prev {
    left: 30px;
  }
}

.swiper .swiper-button-disabled {
  opacity: 0 !important;
  animation: none;
}
:root {
  --swiper-navigation-color: #f8bbd0;
}
@keyframes bounceAlpha {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  99% {
    opacity: 0;
  }
}
</style>