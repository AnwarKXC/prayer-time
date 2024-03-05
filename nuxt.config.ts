export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-8",
         title: "Prayer Now",
         meta: [{ name: "description", content: "My amazing site." }],
         viewport: "width=device-width, initial-scale=1",
         link: [{ rel: "icon", type: "image/x-icon", href: "/svgs/logo.svg" }],
      },
   },
   modules: ["@nuxtjs/i18n", "@nuxt/image"],
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