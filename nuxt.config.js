module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Henry and Mia's Trails",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: "Henry and Mia's Trails"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://share.henry.wang/Gas8YQ/A3N3SMk61t+"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    { src: "bulma/bulma.sass", lang: "sass" },
    { src: "~/assets/fontawesome-free/css/all.css", lang: "css" },
    { src: "mapbox-gl/dist/mapbox-gl.css", lang: "css" }
  ],
  plugins: [{ src: "~/assets/js/NavBar.js", ssr: false }]
}
