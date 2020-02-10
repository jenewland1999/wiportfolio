module.exports = {
    siteMetadata: {
        title: `W.I.Portfolio`,
        description: `My forever work in progress portfolio website.`,
        author: `@jenewland1999`,
        siteUrl: `https://jenewland.me.uk/`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-react-helmet`,
        },
        {
            resolve: `gatsby-plugin-sharp`,
        },
        {
            resolve: `gatsby-transformer-sharp`,
        },
        {
            resolve: `gatsby-plugin-sitemap`,
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `W.I.Portfolio`,
                short_name: `W.I.Portfolio`,
                description: `My forever work in progress portfolio website.`,
                lang: `en`,
                start_url: `/`,
                background_color: `#6a1b9a`,
                theme_color: `#6a1b9a`,
                display: `standalone`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                typekit: {
                    id: `fvl5vuj`,
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
