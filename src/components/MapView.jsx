import React, { useEffect, useRef } from 'react';
import useLoadGoogleMaps from '../hooks/useLoadScript';
import '../styles/map.css';

const MapView = () => {
    const isLoaded = useLoadGoogleMaps();
    const mapRef = useRef(null);

    useEffect(() => {
        if (isLoaded) {
            const map = new google.maps.Map(
                mapRef.current, {
                    center: { lat: 37.7749, lng: -122.4194 },
                    zoom: 12,
                }
            );
        }
    }, [isLoaded]);

    // const handleMouseEnter = () => {
    //     mapRef.current.style.width = '25vw';
    //     mapRef.current.style.height = '30vh';
    //     mapRef.current.style.transition = 'width 0.25s, height 0.25s';
    // };
    
    // const handleMouseLeave = () => {
    //     mapRef.current.style.width = '19vw';
    //     mapRef.current.style.height = '25vh';
    //     mapRef.current.style.transition = 'width 0.25s, height 0.25s';
    // };

    return (
        <div>
            {isLoaded ? (
                <div id="map" 
                    ref={mapRef}  
                    // onMouseEnter={handleMouseEnter} 
                    // onMouseLeave={handleMouseLeave}
                >
                </div>
            ) 
            : (<p className="loading-text-map">Carregando o mapa...</p>)}
        </div>
  );
};

export default MapView;
