import React, { Component } from 'react'
import HeaderBK from '../../../assets/img/header/header-6.jpg' 
import Parallax from '../../../components/parallax/Parallax'
import Overlay from './HeaderOverlay'

import './style/header.scss'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <Parallax src={HeaderBK}/>
                <Overlay/>
            </header>
        )
    }
}
