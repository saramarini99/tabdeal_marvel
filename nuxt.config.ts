import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  ssr: true,
  modules: ['@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});