import React, { Component } from 'react'
import Member from './TeamMember'

import './style/team.scss'

const members = [
    { name: 'Aleksander Folkestad', title: 'Project Manager', description: 'The project manager has complete oversight of day-to-day operations and is responsible for executive decision-making and overarching planning, direction, and organizational development.' },
    { name: 'Cathrine Becker', title: 'Deputy Project Manager', description: 'The deputy project manager is the project manager’s right hand, engaging in intimate cooperation and handling of similar tasks.' },
    { name: 'Håvard Stenstadvold', title: 'Cheif Financial Officer', description: 'As CFO, Håvard is responsible for handling the finances of Phi Avionics. This includes communicating with sponsors, monitoring of overarching activities and intimate cooperation with the manager and deputy manager.' },
    { name: 'Erlend Mikkelsen', title: 'Lead Hardware Engineer', description: 'As Lead Hardware Engineer, Iacob leads Phi Avionics R&D efforts. Relevant fields of research include aerodynamics, electronics and mechanical engineering.' },
    { name: 'Iacob Fleischer Nedreaas', title: 'Senior Hardware Engineer', description: 'The deputy head chief engineer is working close with the chief engineer, and he will help lead the engineering team whenever needed.' },
    { name: 'Imre Angelo', title: 'Tech Lead', description: 'The software department is responsible for developing the drones controls.' },
    { name: 'Oda Hjemli', title: 'Head of Marketing', description: 'The head of marketing is responsible for promoting the project and maintaining the sponsorship agreements. She is leading a team who will constantly work on making the project bigger and is in charge of the social media accounts.' }
]

export default class Team extends Component {    
    render() {
        return (
            <section id="team" className="team section">
                <h2 className="title">Meet the Team</h2>
                <div className="team-list">{ 
                    members.map((value, index) => {
                        return <Member key={index} name={value.name} title={value.title} description={value.description}/>
                    })
                }</div>
            </section>
        )
    }
}