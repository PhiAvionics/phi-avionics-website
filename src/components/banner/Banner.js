import React, { Component } from 'react'
import './banner.scss'

export default class Banner extends Component {
    render() {
        return (
            <section className={"section banner" + (this.props.sectionStyle !== undefined ? " " + this.props.sectionStyle : "")}>
                <div className={"bb-banner" + (this.props.graphicStyle !== undefined ? " " + this.props.graphicStyle : "")}>
                    <div className="bb-graphic" style={{ backgroundImage: `url(${this.props.graphic})` }}/>
                </div>
            </section>
        )
    }
}
