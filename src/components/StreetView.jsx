import React, { useEffect, useRef } from 'react';
import useLoadGoogleMaps from '../hooks/useLoadScript';
import streetview from 'awesome-streetview';
import '../styles/streetView.css';

const apiKey = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg";

const StreetView = () => {
    const isLoaded = useLoadGoogleMaps(apiKey);
    const streetViewRef = useRef(null);

    let lat = streetview.locations[0][0];
    let lng = streetview.locations[0][1];

    const fenway = { lat, lng };

    useEffect(() => {
        if (isLoaded) {
            const panorama = new google.maps.StreetViewPanorama(
                streetViewRef.current, 
                {
                    position: fenway,
                    pov: {
                        heading: 34,
                        pitch: 10,
                    },
                    disableDefaultUI: true,
                    linksControl: false,
                    panControl: false,
                    scrollwheel: false,
                    addressControl: false,
                    addressControlOptions: false,
                    imageDateControl: false,
                    showRoadLabels: false,
                    // clickToGo: false,    
                }
            );
        }
    }, [isLoaded]);


    const style = document.createElement('style');

    style.innerHTML =
        `
            .gm-style-cc, .gmnoprint a[href^="https://www.google.com/maps/terms"],
            .gmnoprint a[href^="https://www.google.com/maps?output=classic"] {
                display: none !important;
            }
        `;

    document.head.appendChild(style);

    return (
        <div>
            {isLoaded ?
                (<div id='pano' ref={streetViewRef} />) :
                (<p className="loading-text-streetview">Carregando o mapa...</p>)}
        </div>
    );
};

export default StreetView;