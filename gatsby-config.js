module.exports = {
  siteMetadata: {
    title: `Paul Borm`,
    description: `Frontend-Entwickler & Mediengestalter aus dem Raum Stuttgart, Esslingen,
                  Nürtingen und Wendlingen. Ich gestalte und entwickle moderne Webprojekte.`,
    author: `@borm_paul`,
  },
  plugins: [
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
        name: `Paul Borm`,
        short_name: `Paul Borm`,
        start_url: `/`,
        //background_color: `#663399`,
        //theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/paul_borm-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: true,
        host: "www.paulborm.de",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `terminal-tools`,
        path: `${__dirname}/src/contents/terminal-tools`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              injectStyles: false,
              colorTheme: {
                defaultTheme: "Light+ (default light)",
                prefersDarkTheme: "Dark+ (default dark)",
              },
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
