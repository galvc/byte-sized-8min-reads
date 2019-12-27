import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/layout"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, prev } = pageContext

  return (
    <Layout>
      <div className="my-3">
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <div className="mb-5 text-gray-700 text-sm">
            <p>{post.frontmatter.date}</p>
            <p>{post.timeToRead} min of reading</p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <span>hello</span>
      <div className="flex mb-4 justify-between items-center border-t">
        {prev && <Link to={prev.fields.slug}><div className="w-1/5 text-left text-sm p-2 uppercase">Previous</div></Link>}
        {next && <Link to={next.fields.slug}><div className="w-1/5 text-right text-sm p-2 uppercase">Next</div></Link>}
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