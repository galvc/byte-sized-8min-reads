import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Menu from "./menu"
export default () => (
    <div className=" justify-between align-center my-3">
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
            <div>
                <Link to="/" className="text-black">
                    <h1 className="text-lg uppercase font-bold">{data.site.siteMetadata.title}</h1>
                </Link>
            </div>
        )}
    />
    <Menu />
    </div>
);
