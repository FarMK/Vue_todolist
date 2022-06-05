export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
  
   router: {
      base: 'https://github.com/FarMK/Vue_todolist.git'
   },


    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'todo-list',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
        "~/assets/css/main.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/bootstrap.js', '~/plugins/firebase.js'],


    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['bootstrap-vue/nuxt', [
        '@nuxtjs/firebase',
        {
            config: {
                apiKey: 'AIzaSyA3eauqcSf5NTYQTt5pnP519x_dpQJS6EQ',
                authDomain: 'project-5e9e3.firebaseapp.com',
                projectId: 'project-5e9e3',
                storageBucket: 'project-5e9e3.appspot.com',
                messagingSenderId: '986162704603',
                appId: '1:986162704603:web:7ed5d2019e535257e8dcfe',
                measurementId: '<measurementId>'
            },
            services: {
                auth: true // Just as example. Can be any other service.
            }
        }
    ]],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
