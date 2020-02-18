import React, { Component } from 'react'

import Header from './header/Header'
import Team from './team/Team'
import Sponsors from '../../components/sponsors/Sponsors'
import Project from './project/Project'
import Banner from './../../components/banner/Banner'
import Vision from './vision/Vision'

import Mountain from '../../assets/elements/banners/mountain.jpeg' 
import DarkDrone from '../../assets/img/drone_dark.jpg'
import PaintSplash from '../../assets/elements/banners/paint-splash.jpeg'
import Join from './join/Join'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="page landing-page">
                <Header/>
                <Join/>
                <Project/>
                <Banner graphic={ Mountain } sectionStyle="padding-top padding-bottom"/>
                {/* <Team/> */}
                <Vision/>
                {/* <Banner graphic={ DarkDrone } graphicStyle="fullscreen b"/> */}
                {/* <Banner graphic={ PaintSplash } graphicStyle="fullscreen" sectionStyle="a"/> */}
                {/* <Sponsors/> */}
            </div>
        )
    }
}
