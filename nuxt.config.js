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
      },
      {
        name: "msapplication-TileColor",
        content: "#f2f2f2"
      },
      {
        name: "msapplication-config",
        content: "/browserconfig.xml"
      },
      {
        name: "theme-color",
        content: "#f2f2f2"
      }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg"
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico"
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
    extend(config, ctx) {}
  },
  css: [
    { src: "bulma/bulma.sass", lang: "sass" },
    { src: "~/assets/css/main.sass", lang: "sass" },
    { src: "~/assets/fontawesome-free/css/all.css", lang: "css" },
    { src: "mapbox-gl/dist/mapbox-gl.css", lang: "css" }
  ],
  plugins: [{ src: "~/assets/js/NavBar.js", ssr: false }]
}
