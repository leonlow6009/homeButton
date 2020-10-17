import colors from 'vuetify/es5/util/colors'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/homeButton/'
  }
} : {};

const faviconPath = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/' : '/';


export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  // ...routerBase,
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '',
    title: 'Home Button | Harness our network of agents to sell you flat fast at the best market rate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hassle free property agent with reasonable commission rates in fast selling your HDB. Call 91696009 now or visit www.homebutton.co to harness our network of agents to sell you flat fast at the best market rate.' },
      {
        property: 'og:url',
        content: 'https://homebutton.co/'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: 'Harness our network of agents to sell you flat fast at the best market rate'
      },
      {
        property: 'og:description',
        content: 'Hassle free property agent with reasonable commission rates in fast selling your HDB. Call 91696009 now or visit www.homebutton.co to harness our network of agents to sell you flat fast at the best market rate.'
      },
      {
        property: 'og:image',
        content: `${faviconPath}fb_banner.png`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${faviconPath}favicon32.ico` }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  '@/assets/css/main.scss',
  'vue-slick-carousel/dist/vue-slick-carousel.css',
  'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [{ src: './plugins/vue-slick-carousel.js' }],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/device',
    'vue-scrollto/nuxt',
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#001E83',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    fallback: '404.html'
  }
}
