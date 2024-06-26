// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: [
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
    },
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/robots",
    "@nuxtjs/device",
    "@nuxtjs/sitemap",
  ],
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://www.mya-hkvtuber.com",
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-Hant",
      },
      titleTemplate: "%s - 米亞 Mya HKVTuber",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
      ],
      script: [
        { src: "/script/lazy-iframe.js", async: true, defer: true },
        { src: "/script/live2dcubismcore.min.js", async: true, defer: false },
      ],
      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "米亞HKVTuber (Mya HKVTuber), 一名來自香港的VTuber的非官方專頁, Fan made用於院友以及跳轉到米亞其他官方&非官方網頁用",
        },
        { property: "og:site_name", content: "米亞HKVTuber" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.mya-hkvtuber.com/",
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: "/img/fullwidth.jpg",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "米亞VTuber (Mya VTuber) 非官方專頁",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "米亞VTuber (Mya VTuber), 一名來自香港的VTuber的非官方專頁, Fan made用於院友以及跳轉到米亞其他官方&非官方網頁用",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/fullwidth.jpg",
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://www.mya-hkvtuber.com/",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "米亞VTuber (Mya VTuber) 非官方專頁",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "米亞VTuber (Mya VTuber), 一名來自香港的VTuber的非官方專頁, Fan made用於院友以及跳轉到米亞其他官方&非官方網頁用",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/img/fullwidth.jpg",
        },
      ],
    },
  },
});
