import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import './style/sponsors.scss'

const path = '../../assets/elements/sponsors/'
const sponsors = [
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    { name:'Placeholder Phi', file:'placeholder.jpg'},
    
    // Ex.
    // { name:'Kongsberg Group', file:'kongsberg.svg' },
    // { name:'Tesla Motors', file:'tesla.svg' },
    // { name:'Lockheed Marting', file:'lockheed_martin.png' },
    // { name:'Tesla Motors', file:'tesla.svg' },
    // { name:'Lockheed Marting', file:'lockheed_martin.png' },
]

export default class Sponsors extends Component {
    render() {
        return (
            <section id="sponsors" className="sponsors section">
                <h1 className="typography headline">Meet the Sponsors</h1>
                <div className="typography text">
                    Want to see your company logo here? We are currently looking for our first sponsors!
                </div>
                <Link className="typography link" to="./sponsor">Learn more about sponsor opportunities.</Link>
                <div className="layout content">{
                    sponsors.map((value, index) => {
                        return <img key={index} className={'sponsor ' + value.name.toLowerCase().replace(' ', '-')} src={path + value.file} alt={value.name}/>
                    })
                }</div>

                {/* <div className="container">
                    <div className="img"/>
                </div> */}
            </section>
        )
    }
}