import React from "react"
import Layout from "../layout/layout"
import { graphql, Link } from "gatsby"

// this page is currently not being used

export default ({ data }) => {
  return (
    <Layout>
        {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                        <h3>
                        {node.frontmatter.title}{" "}
                        <span>
                            — {node.frontmatter.date}
                        </span>
                        </h3>
                        <p>{node.excerpt}</p>
                    </Link>
                </div>
        ))}
    </Layout>
  )
}
export const query = graphql`
  query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        excerpt
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
}

`