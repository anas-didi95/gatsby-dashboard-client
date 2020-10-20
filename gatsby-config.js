module.exports = {
  siteMetadata: {
    title: `Dashboard`,
    description: `Dashboard client application developed using Gatsby and TypeScript.`,
    author: `Anas Juwaidi <anas.didi95@gmail.com>`,
    social: {
      website: "https://anasdidi.dev/",
      github: "https://github.com/anas-didi95/gatsby-dashboard-client",
      linkedin: "https://www.linkedin.com/in/anas-juwaidi-mohd-jeffry"
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dashboard.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-extract-schema`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
