import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <section className="project section">
                <div className="layout box">
                    <h1 className="typography headline">
                        <span className="typography eyebrow">Revolutionizing</span>
                        Search & Rescue
                    </h1>
                    <div className="typography text">
                        We are a group of NTNU students (Norwegian University of Science and Technology) 
                        working together to build a drone. Our vision is to build a amphibious search-and-rescue drone
                        capable of finding missing persons in both aerial and submarine environments.
                        The drone will be built from scratch and we will combine all of our knowledge from
                        different fields of study to create the best possible search-and-rescue drone.
                    </div>
                </div>
            </section>
        )
    }
}
