import React, { useEffect, useRef } from 'react';
import useLoadGoogleMaps from '../hooks/useLoadScript';
import '../styles/streetView.css';

const StreetView = ({lat, lng, setLocation}) => {
    const isLoaded = useLoadGoogleMaps();
    const streetViewRef = useRef(null);

    const fenway = { lat, lng };

    useEffect(() => {
        if (isLoaded) {    
            setLocation({lat, lng});
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
                    panControl: true,
                    scrollwheel: false,
                    addressControl: false,
                    addressControlOptions: false,
                    imageDateControl: false,
                    showRoadLabels: false,
                    zoomControl: true,
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