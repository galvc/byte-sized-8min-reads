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
    { resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              prompt: {
              user: "root",
              host: "localhost",
              global: false,
              },
            escapeEntities: {},
          }
        }
    ]
}
    },
    `gatsby-plugin-postcss`],
}
