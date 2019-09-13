import React, { Component } from 'react'

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
                <h2 className="title">Meet the Sponsors</h2>
                {/* <div className="opportunity">Want your company logo here? We are currently looking for our first sponsors! <a href="sponsor">Click here to learn more about sponsoring PhiAvionics.</a></div> */}
                <div className="content">{
                    sponsors.map((value, index) => {
                        return <img key={index} className={'sponsor ' + value.name.toLowerCase().replace(' ', '-')} src={path + value.file} alt={value.name}/>
                    })
                }</div>
            </section>
        )
    }
}