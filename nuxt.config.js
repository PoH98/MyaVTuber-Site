import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 米亞 Mya HKVTuber',
    title: 'Home',
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '米亞HKVTuber (Mya HKVTuber) 的非官方專頁, Fan made用於院友以及跳轉到米亞其他官方&非官方網頁用' },
      { hid: 'robots', name: 'robots', content: 'FOLLOW' },
      { hid: 'og:title', name: 'og:title', content: '米亞VTuber (Mya VTuber) 非官方專頁' },
      { hid: 'og:description', name: 'og:description', content: '米亞VTuber (Mya VTuber) 的非官方專頁, Fan made用於院友以及跳轉到米亞其他官方&非官方網頁用' },
      { hid: 'og:image', name: 'og:image', content: '/img/fullwidth.jpg' },
      { hid: 'og:site_name', name: 'og:site_name', content: '米亞HKVTuber' },
      { hid: 'twitter:title', name: 'og:title', content: '米亞VTuber (Mya VTuber) 非官方專頁' },
      { hid: 'twitter:description', name: 'og:description', content: '米亞VTuber (Mya VTuber) 的非官方專頁, Fan made用於院友以及跳轉到米亞其他官方&非官方網頁用' },
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
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    "nuxt-purgecss",
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  sitemap:{
    hostname: 'https://mya-hkvtuber.com',
    gzip: true,
    routes:[
      '/patient/ben',
      '/patient/hentai_matthew',
      '/patient/panda_kenneth'
    ]
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: null
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    theme: {
      disable: true
    },
    defaultAssets: {
      font: {
        family: "Orbitron"
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
    whitelist: ['v-application', 'v-application--wrap', 'container', 'spacer'],
    whitelistPatterns: () => [
      /^v-((?!application).)*$/,
      /^\.theme--light*/,
      /.*-transition/,
      /^d-.+/,
      /^col-.+/
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--light*/],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
