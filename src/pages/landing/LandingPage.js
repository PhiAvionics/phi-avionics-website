import React, { Component } from 'react'

import Header from './header/Header'
import Team from './team/Team'
import Sponsors from '../../components/sponsors/Sponsors'
import Project from './project/Project'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="page landing-page">
                <Header/>
                <Project/>
                <Team/>
                <Sponsors/>
            </div>
        )
    }
}
