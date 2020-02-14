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
                    <p className="text-lg font-bold">{data.site.siteMetadata.title}
                    {" "}–{" "}         
                    <span className="text-sm font-normal text-gray-700">webdev-flavored blog. 8min or under reading time.</span>
                    </p>
                    
                </Link>
                <Menu />
                
            </div>
        )}
    />
    
    </div>
);
