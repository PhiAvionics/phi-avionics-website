import React, { Component } from 'react'
import Sitemap from '../sitemap/Sitemap'

export default class Footer extends Component {
    componentDidMount() {
        this.initMap();
    }

    initMap() {
        var mapkit = window.mapkit;

        mapkit.init({
            authorizationCallback: function(res) {
                res('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlY3QzM1NTI2SkMifQ.eyJpc3MiOiJWWDVZTVg5N1g1IiwiaWF0IjoxNTgyMDM5NzU5LCJleHAiOjE2MDA3ODg1NTl9.uj7qoo11jviU9tSDwxdpTueLQaBQtEvSSzeFXbTeD2w_4jqhS0Ng5JhrU4GQBeO6Pb1JQE0d18o-l_Lf4d5s-w');
            }
        });
        
        var geocoder = new mapkit.Geocoder({
            language: "en-GB",
            getsUserLocation: false
        });

        geocoder.lookup("NTNU, Trondheim", (err, data) => {
            var place = data.results[0];

            var region = new mapkit.CoordinateRegion(
                place.coordinate,
                new mapkit.CoordinateSpan(0.02, 0.02)
            );

            var map = new mapkit.Map('map', {
                colorScheme:  mapkit.Map.ColorSchemes.Dark,
                isRotationEnabled: true,
                isZoomEnabled: true,
                showsZoomControl: true,
                showsMapTypeControl: false,
                showsCompass: mapkit.FeatureVisibility.Hidden,
                region: region
            });

            var marker = new mapkit.MarkerAnnotation(place.coordinate);
            map.addAnnotation(marker);
        });
    }
    
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
                            <p>Høgskoleringen 1</p>
                            <p>7491 Trondheim</p>
                            {/* <p>Matteland lol</p> */}
                            <br/><br/>
                            <p>Got any questions?</p>
                            <p>Reach out to contact@phiavionics.com</p>
                        </div>
                    {/* </div> */}
                    {/* <Sitemap/> */}
                </div>
                <div className="legal">
                    <span className="copyright">Copyright Phi Avionics &copy; 2019. All rights reserved.</span>
                </div>
            </footer>
        )
    }
}
