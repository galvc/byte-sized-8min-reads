import React from "react"
import {Link} from "gatsby"

//this page is currently not being used

const ListLink = (props) => (
    <li>
        <Link to={props.to} className="px-5">{props.children}</Link>
    </li>
)
export default () => (
    <div>
        <ul className="flex justify-center">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/posts">Posts</ListLink>
        </ul>
    </div>
)