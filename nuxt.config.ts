// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path";
export default defineNuxtConfig({
  app:{
    head:{
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '哇子个人主页' },
        { name: 'keywords', content: '哇子，个人主页，开源个人主页，哇子个人介绍，哇子项目介绍' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin:'anonymous'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&display=swap'},
      ],
      // script: [
      //   { src: 'https://hm.baidu.com/hm.js?71e652ef791d0f53633eb82de7980807'}
      // ]
    },
  },
  vite:{
    css:{
      preprocessorOptions:{
        less:{
           additionalData: '@import "./assets/css/vars.less";',
        }
      }
    }
  },
  modules: ['@nuxtjs/style-resources', '@nuxtjs/tailwindcss', '@nuxt/content'],
  css: ['@/public/css/fonts.css','@/assets/css/global.less','@/assets/css/animate.less'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: true,
  content:{
    sources:{
      content: {
        driver: 'fs',
        prefix: '/docs', // All contents inside this source will be prefixed with `/docs`
        base: resolve(__dirname, 'content')
      },
      project:{
        prefix: '/project',
        driver: 'fs',
        base: resolve(__dirname, 'project') // Path for source directory
      },
      config:{
        prefix: '/config',
        driver: 'fs',
        base: resolve(__dirname, 'config') // Path for source directory
      }
    }
  },
})