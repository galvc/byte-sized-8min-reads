import React from "react"
import {Link} from "gatsby"

const ListLink = (props) => (
    <li className="inline-block">
        <Link to={props.to} className="pr-3">{props.children}</Link>
    </li>
)
export default () => (
    <div>
        <ul>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/tags">Tags</ListLink>
            <ListLink to="/resources">Resources</ListLink>
        </ul>
    </div>
)