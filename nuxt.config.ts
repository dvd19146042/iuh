// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-server-utils', "@nuxt/image",'@nuxtjs/tailwindcss'],
  // nitro: {
  //   preset: 'vercel',
  // },
  runtimeConfig:{
   public:{
    mongodbUri:"mongodb+srv://iuhproject:12345Iuh@iuh.vkrnst0.mongodb.net/database",
   }
  },
 
})