export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  modules: [
    // pinia plugin
    '@pinia/nuxt',
  ],

  nitro: {
    esbuild: {
      options: {
        target: "es2020",
      },
    },
  },

  // imports: {
  //   dirs: ['./stores'],
  // },

  // pinia: {
  //   autoImports: ['defineStore', 'acceptHMRUpdate'],
  // },
})
