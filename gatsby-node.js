const path = require("path")
const _ = require("lodash")

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if(node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `content`});
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("src/templates/postTemplate.js")
  const tagTemplate = path.resolve("src/templates/tagTemplate.js")
  const result = await graphql(`
    query {
      postsRemark: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
                title
                tags
            }
          }
        }
      }

    tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
    // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

    const posts = result.data.postsRemark.edges
    posts.forEach(({ node }, index) => {
    createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: {
            slug: node.fields.slug,
            // prev: index === 0 ? null : posts[index - 1].node,
            // next: index === (posts.length - 1) ? null : posts[index + 1].node,
            prev: posts.previous,
            next: posts.next
        },
    })
  })

    const tags = result.data.tagsGroup.group
    tags.forEach(tag => {
        createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
            tag: tag.fieldValue,
        },
    })
    })


}