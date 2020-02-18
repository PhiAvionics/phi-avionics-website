import React from 'react'
import { NavLink as Link } from 'react-router-dom'

export default function NavbarItem(props) {
    return (
        <li className="gn-item gn-item-menu">
            <div className="gn-link">
                {/* <Link to={props.target} className="gn-link" activeClassName="gn-link active"> */}
                    <span>{props.text}</span>
                {/* </Link> */}
            </div>
        </li>
    )
}