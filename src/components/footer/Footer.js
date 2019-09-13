import React, { Component } from 'react'
import Sitemap from '../sitemap/Sitemap'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="content">
                    {/* <div className="location"> */}
                        <div className="map-container">
                            <div id="map"/>
                        </div>
                        <div className="address">
                            <p>Phi Avionics NTNU</p>
                            <p>Høgskoleringen 3</p>
                            <p>7037 Trondheim</p>
                            <p>Matteland lol</p>
                            <br/>
                            <p>Har du spørsmål?</p>
                            <p>Ta kontakt via xxxxx@phiavionics.com</p>
                        </div>
                    {/* </div> */}
                    <Sitemap/>
                </div>
                <div className="legal">
                    <span className="copyright">Copyright Phi Avionics &copy; 2019. All rights reserved.</span>
                </div>
            </footer>
        )
    }
}
