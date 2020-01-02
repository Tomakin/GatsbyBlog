module.exports = {
  siteMetadata: {
    title: "Burak Tomakin",
    author: "Burak Tomakin",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-transformer-remark"
  ]
}
