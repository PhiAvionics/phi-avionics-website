import React, { Component } from 'react'
// import Video from '../../assets/elements/header/header-preview.mov'

import './style/parallax.scss'

export default class Parallax extends Component {
    constructor() {
        super()
      
        this.state = {
            speed: 0.025,
            offset: 0
        };
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.parallaxShift);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.parallaxShift);
    }
    
    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset
        })
    }

    render() {
        return (
            // <div className="parallax">
            //     <video muted autoPlay style={{ position: 'relative', top: -200 }}>
            //         <source src={ Video } type="video/mp4"></source>
            //     </video>
            // </div>
            <div className="parallax" style={{
                backgroundImage: `url(${this.props.src})`,
                backgroundPositionY: this.state.offset * this.state.speed - 200
            }}/>
        )
    }
}
