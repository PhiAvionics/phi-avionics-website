import React, { Component } from 'react'

export default class HeaderOverlay extends Component {
    render() {
        return (
            <div className="overlay">
                <div className="textbox">
                    <span className="bn-title">Meet DaVinci</span><br/>
                    <span className="bn-text">Our first project will by 2022 be a state of the art search and rescue drone, leveraging the power of machine learning and cloud computing to find missing persons.</span>
                </div>
                <div className="banner">
                    <div className="content">
                        <h1>Welcome to PhiAvionics <span>- Please note that our website is under construction</span></h1>
                        {/* <h1>Welcome to PhiAvionics <span>- Theory makes engineering perfect</span></h1> */}
                    </div>
                </div>
            </div>
        )
    }
}
