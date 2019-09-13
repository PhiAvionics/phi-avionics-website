import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarItem(props) {
    return (
        <li className="gn-item gn-item-menu"><Link className="gn-link" to={props.target}><span>{props.text}</span></Link></li>
    )
}