import React, { Component } from 'react'

import './style/vision.scss'

export default class Vision extends Component {
    render() {
        return (
            <section className="vision section banner">
                <div className="banner">
                    <div className="graphic"></div>
                    <div className="layout overlay">
                        <h1 className="typography headline">
                            <span className="typography eyebrow">Fast. Efficient. Lifesaving.</span>
                            Every Second Counts
                        </h1>
                        <div className="typography text">
                            People lost usually find themselves in dangerous locations and in hazardous conditions.
                            Because of these conditions, search-and-rescue crew often need hours to prepare.
                            This delay can be fatal, in a situation where every second counts.
                            Leonardo is designed to instantly be deplay to such environments, saving previous search time, <br/>
                            and without risking human lives.
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
