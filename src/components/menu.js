import React from "react"
import {Link} from "gatsby"

//this page is currently not being used

const ListLink = (props) => (
    <li className="inline-block">
        <Link to={props.to} className="pr-3">{props.children}</Link>
    </li>
)
export default () => (
    <div>
        <ul>
            <ListLink to="">About</ListLink>
            <ListLink to="/tags">Tags</ListLink>
        </ul>
    </div>
)