import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import elementReady from './plugins/awaitElement'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Particles from "particles.vue";

Vue.use(Particles);
Vue.config.productionTip = false
Vue.prototype.$wait = elementReady
new Vue({
  vuetify,
  router,
  mounted() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')