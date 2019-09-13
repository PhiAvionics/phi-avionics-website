import React, { Component } from 'react'
import temp from '../../../assets/img/team/default.jpg'

export default class TeamMember extends Component {
    render() {
        return (
            <div className="team-member">
                <img className="tm-profile centered" src={temp} alt="pic"/>
                <div className="tm-bottom">
                    <div className="tm-name centered">{this.props.name}</div>
                    <div className="tm-title centered">{this.props.title}</div>
                    <div className="tm-description">{this.props.description}</div>
                </div>
            </div>
        )
    }
}
