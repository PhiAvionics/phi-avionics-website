import React, { Component } from 'react'

import HamburgerMenu from '../hamburger-menu/HamburgerMenu'
import Item from './items/Item'
import Logo from './items/Logo'

// import './style/global.navigation.scss'

export default class Navbar extends Component {
    links = [
        { text:'Project', target: '/#project' },
        { text:'Team', target: '/#team' },
        { text:'Sponsor', target: '/sponsor' },
        { text:'Join Us', target: '/join' }
    ]

    render() {
        return (
            <nav id="navbar">
                <div className="gn-bar">
                    <input type="checkbox" id="gn-menustate" className="gn-menustate" style={{display: 'none'}}/>
                    <div className="gn-content">
                        <ul className="gn-header">
                            <HamburgerMenu toggle="gn-menustate"/>
                            <Logo target={'/'}/>
                        </ul>
                        <ul className="gn-list">
                            <Logo target={'/'}/>
                            {this.links.map((value, index) => {
                                return <Item key={index} text={value.text} section={value.section} target={value.target}/>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
