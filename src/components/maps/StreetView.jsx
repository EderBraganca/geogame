import { useEffect, useRef } from 'react';
import useLoadGoogleMaps from '../../hooks/useLoadScript';
import '../../styles/streetView.css';

const StreetView = ({lat, lng, setLocation, props}) => {
    const isLoaded = useLoadGoogleMaps();
    const streetViewRef = useRef(null);

    const fenway = { lat, lng };

    useEffect(() => {
        if (isLoaded) {    
            setLocation({lat, lng});
            new google.maps.StreetViewPanorama(
                streetViewRef.current, 
                {
                    position: fenway,
                    pov: {
                        heading: 34,
                        pitch: 10,
                    },
                    showRoadLabels: false,
                    disableDefaultUI: true,
                    addressControl: false,
                    addressControlOptions: false,
                    imageDateControl: false,
                    panControl: true,


                    // props from gamemode
                    linksControl: props.linksControl,
                    zoomControl: props.zoomControl,
                    scrollwheel: props.scrollwheel,
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