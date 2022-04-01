import $http from 'axios';
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 米亞 Mya HKVTuber',
    title: 'Home',
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '米亞HKVTuber (Mya HKVTuber), 一名來自香港的VTuber的非官方專頁, Fan made用於院友以及跳轉到米亞其他官方&非官方網頁用' },
      { hid: 'robots', name: 'robots', content: 'FOLLOW' },
      { hid: 'og:title', name: 'og:title', content: '米亞VTuber (Mya VTuber) 非官方專頁' },
      { hid: 'og:description', name: 'og:description', content: '米亞VTuber (Mya VTuber), 一名來自香港的VTuber的非官方專頁, Fan made用於院友以及跳轉到米亞其他官方&非官方網頁用' },
      { hid: 'og:image', name: 'og:image', content: '/img/fullwidth.jpg' },
      { hid: 'og:site_name', name: 'og:site_name', content: '米亞HKVTuber' },
      { hid: 'twitter:title', name: 'og:title', content: '米亞VTuber (Mya VTuber) 非官方專頁' },
      { hid: 'twitter:description', name: 'og:description', content: '米亞VTuber (Mya VTuber), 一名來自香港的VTuber的非官方專頁, Fan made用於院友以及跳轉到米亞其他官方&非官方網頁用' },
      { hid: 'twitter:image', name: 'og:image', content: '/img/fullwidth.jpg' },
      { hid: 'twitter:site', name: 'og:site_name', content: '@MyaVtuber' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],
  },
  serverMiddleware: ['~/serverMiddleware/selectiveSSR.js'],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/lightgallery.js', mode: 'client' },
    { src: '~/plugins/lazy-iframe.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    "nuxt-purgecss"
  ],
  sitemap: {
    hostname: 'https://www.mya-hkvtuber.com',
    gzip: true,
    exclude:['/privacy-policy'],
    routes: async () =>{
      const list = await $http
      .get(
        "https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/patient-list",
        { headers: { "X-Flatten": 1 } }
      )
      .then((res) => res.data);
      return list.items.map(function(item) {
        return '/patient/' + item.id;
      });
    }
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: '/privacy-policy'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/device',
    '@nuxtjs/sitemap',
    '@nuxt/http'
  ],
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    theme: {
      disable: true
    },
    defaultAssets: {
      font: {
        family: "Montserrat"
      },
      icons: 'mdiSvg'
    }
  },
  '@fullhuman/postcss-purgecss': {
    content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
    safelist: ['html', 'body']
  },
  purgeCSS: {
    styleExtensions: ['.css', '.scss', '.styl', '.sass', '.postcss'],
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'node_modules/@nuxt/vue-app/template/**/*.html',
      'node_modules/@nuxt/vue-app/template/**/*.vue',
    ],
    extractors: [
      {
        extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js'],
      },
    ],
    whitelist: ['v-application', 'v-application--wrap', 'container', 'spacer', 'img-fluid', 'col', 'v-responsive__sizer', 'confetti-canvas'],
    whitelistPatterns: () => [
      /^v-((?!application).)*$/,
      /^v-application--is-ltr.+/,
      /^\.theme--light*/,
      /.*-transition/,
      /^d-.+/,
      /^col-.+/,
      /^lg-.+/,
      /^order-.+/
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--light*/],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    transpile: ['mdi-vue', ({ filePath }) => /(\.esm\.js|\.mjs)$/.test(filePath)]
  }
}
