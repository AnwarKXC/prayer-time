// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-8",
         title: "Prayer Now",
         meta: [{ name: "description", content: "My amazing site." }],
         viewport: "width=device-width, initial-scale=1",
         link: [
            {
               rel: "stylesheet",
               href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
               integrity:
                  "sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==",
               crossorigin: "anonymous",
               referrerpolicy: "no-referrer",
            },
            { rel: "icon", type: "image/x-icon", href: "/svgs/logo.svg" },
         ],
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
