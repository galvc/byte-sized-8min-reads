import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
        query TitleQuery{
            site {
                siteMetadata {
                    title
                    }
                }
            }
        `}
        render={data => (
            <span className="my-3">
                <Link to="/" className="text-black">
                    <h1 className="text-lg uppercase font-bold pt-3">{data.site.siteMetadata.title}</h1>
                </Link>
                <aside className="text-sm text-gray-700">8min or less blog posts</aside>
            </span>
        )}
    />
);
