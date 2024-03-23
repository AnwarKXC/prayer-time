export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         link: [{ rel: "icon", type: "image/x-icon", href: "/svgs/logo.svg" }],
      },
   },
   modules: [
      "@nuxtjs/i18n",
      "@nuxt/image",
      ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
   ],
   imports: { dirs: ["./composables", "./stores"] },
   css: ["./assets/main.css"],
   devtools: { enabled: true },
   i18n: {
      vueI18n: "./locales/i18n.config.ts",
   },

   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
})
