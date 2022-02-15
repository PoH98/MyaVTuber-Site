<template>
  <div class="glitch-text" :style="vars" :class="classes">
    {{ content }}
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    vars() {
      return '--content:"' + this.content + '"';
    },
  },
};
</script>
<style>
.glitch-text {
  position: relative;
  text-align: center;
}

.glitch-text::before,
.glitch-text::after {
  position: absolute;
  content: var(--content);
  transform: translate(-50%, -50%);
  z-index: -1;
}

.glitch-text::after {
  top: 50.5%;
  left: 50.5%;
  width: 100%;
  color: rgba(3, 169, 244, 0.8);
  animation: distort2 300ms linear infinite;
}

.glitch-text::before {
  top: 49.5%;
  left: 49.5%;
  width: 100%;
  color: rgba(233, 30, 99, 0.8);
  animation: distort1 300ms linear infinite;
}

@keyframes distort1 {
  0% {
    top: 49.5%;
    left: 48.5%;
  }
  12.5% {
    top: 49.5%;
    left: 50%;
  }
  25% {
    top: 49.5%;
    left: 51.5%;
  }
  37.5% {
    top: 50%;
    left: 50.5%;
  }
  50% {
    top: 50.5%;
    left: 50.5%;
  }
  62.5% {
    top: 50.5%;
    left: 50%;
  }
  75% {
    top: 50.5%;
    left: 48.5%;
  }
  87.5% {
    top: 50%;
    left: 49.5%;
  }
  100% {
    top: 49.5%;
    left: 48.5%;
  }
}
@keyframes distort2 {
  0% {
    top: 50.5%;
    left: 51.5%;
  }
  12.5% {
    top: 50%;
    left: 50.5%;
  }
  25% {
    top: 49.5%;
    left: 50.5%;
  }
  37.5% {
    top: 49.5%;
    left: 50%;
  }
  50% {
    top: 49.5%;
    left: 48.5%;
  }
  62.5% {
    top: 50%;
    left: 49.5%;
  }
  75% {
    top: 50.5%;
    left: 49.5%;
  }
  87.5% {
    top: 50.5%;
    left: 50%;
  }
  100% {
    top: 50.5%;
    left: 50.5%;
  }
}
</style>