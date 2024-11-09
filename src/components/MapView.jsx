import React, { useEffect, useRef } from 'react';
import useLoadGoogleMaps from '../hooks/useLoadScript';
import '../styles/map.css';

const apiKey = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg";

const MapView = () => {
    const isLoaded = useLoadGoogleMaps(apiKey);
    const mapRef = useRef(null);

    useEffect(() => {
        if (isLoaded) {
            const map = new google.maps.Map(mapRef.current, {
                center: { lat: 37.7749, lng: -122.4194 },
                zoom: 12,
                //  disableDefaultUI: true,
            });
        }
    }, [isLoaded]);

    const handleMouseEnter = () => {
        mapRef.current.style.width = '30%';
        mapRef.current.style.height = '30vh';
    };
    
    const handleMouseLeave = () => {
        mapRef.current.style.width = '20%';
        mapRef.current.style.height = '25vh';
    };

    return (
        <div>
            {isLoaded ? (
                <div id="map" 
                    ref={mapRef}  
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}>
                </div>
            ) 
            : (<p className="loading-text-map">Carregando o mapa...</p>)}
        </div>
  );
};




export default MapView;
