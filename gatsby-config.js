/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "Byte-sized",
    },
    plugins: [
    {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `content`,
        path: `${__dirname}/content/`,
        },
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `src`,
        path: `${__dirname}/src/`,
        },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`],
}
