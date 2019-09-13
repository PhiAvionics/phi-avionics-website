import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <section className="project section">
                <h2 className="title">Project</h2>
                <div className="textbox">
                    {/* Dev note: Forklar systemet */}
                    <p>We are a group of students at NTNU (Norwegian University of Science and
                    Technology) working together to build a drone. Our project relies on competent minds
                    and dedicated people. Our vision is to build a amphibious search- and rescue-drone
                    capable of retrieving missing persons in both aerial and submarine environments.</p>
                    <p>The drone will be built from scratch and we will combine all of our knowledge from
                    different programs of study to create the best possible search- and rescue-drone. Our
                    work will rely heavily on the theory of aerodynamics and ocean-dynamics, which is
                    the reason for our expression “Theory makes engineering perfect”.</p>
                    <p>Rather than working towards competitions, Phi Avionics will be working long term to
                    develop a system of drones that can channel each other to locate an individual more
                    efficiently.</p>
                </div>
            </section>
        )
    }
}
