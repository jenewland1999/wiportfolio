module.exports = {
  siteMetadata: {
    title: `UI/UX Designer and Front-end Developer • Jordan Newland 🏳️‍🌈`,
    description: `Creative UI/UX Designer and Web Developer based in the UK. Promoting a greener, more accessible web for all. Learn more.`,
    author: `@jenewland1999`,
    siteUrl: `https://jenewland.me.uk/`,
  },
  plugins: [
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jordan Newland 🍵`,
        short_name: `Jordan Newland 🍵`,
        description: `Creative UI/UX Designer and Web Developer based in the UK. Promoting a greener, more accessible web for all. Learn more.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6a1b9a`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
