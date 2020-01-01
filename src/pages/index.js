import React from "react"
import Layout from "../layout/layout"
import Welcome from "../components/welcome"
import { graphql, Link } from "gatsby"

export default ({ data }) => (<Layout>
   <Welcome />
           {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} className="post-preview">
                    <Link to={node.fields.slug}>
                        <h1 className="post-title hover:underline hover:text-black">
                        {node.frontmatter.title}{" "}
                            <span className="text-gray-500 text-sm">
                                — {node.frontmatter.date}
                            </span>
                        </h1>
                    </Link>
                        <p>{node.excerpt}</p>
                </div>
        ))}
</Layout>)

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
        id
      }
    }
  }
}

`