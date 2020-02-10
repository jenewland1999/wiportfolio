module.exports = {
    siteMetadata: {
        title: `W.I.Portfolio`,
        description: `My forever work in progress portfolio website.`,
        author: `@jenewland1999`,
        siteUrl: `https://jenewland.me.uk/`,
    },
    plugins: [
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-preconnect`,
            options: {
                domains: ["https://use.typekit.net"],
            },
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
    ],
}
