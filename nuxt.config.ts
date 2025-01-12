// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt"],
  googleFonts: {
    families: {
      Rubik: [400, 700],
    },
    display: "swap",
  },

  app: {
    head: {
      meta: [
        {
          name: "description",
          content: "Deskripsi",
        },
      ],
    },
  },
});
