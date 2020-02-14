import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/layout"


export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, prev } = pageContext
  return (
    <Layout>
      <div className="my-3">
        <h1>{post.frontmatter.title}</h1>
        <div className="mb-5 text-gray-700 text-sm">
            <p>{post.frontmatter.date}</p>
            <p>{post.timeToRead} min of reading</p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className="flex flex-wrap border-t">
        {prev && <div className="flex-1 h-20 text-left text-sm">
            <Link to={prev.fields.slug}>
            ← Previous 
            <br />
            <span className="font-medium">"{prev.frontmatter.title}"</span>
        </Link></div>}

        {next && <div className="flex-1 h-20 text-right text-sm">
            <Link to={next.fields.slug}>
            Next →
            <br />
            <span className="font-medium">"{next.frontmatter.title}"</span>
        </Link></div>}
    </div>
    </Layout>
  )
}
export const query = graphql`
query ($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      date (formatString: "MMMM DD, YYYY")
    }
    timeToRead
  }
}
`