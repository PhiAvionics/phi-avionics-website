import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarItem(props) {
    return (
        <li className="gn-item gn-logo">
            <Link className="gn-link gn-brandmark" to={props.target}>
                <span className="gn-link-text">Logo</span>
            </Link>
        </li>
    )
}