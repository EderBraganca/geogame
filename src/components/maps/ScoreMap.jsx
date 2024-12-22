import React, { useEffect, useRef } from 'react';
import useLoadGoogleMaps from '../../hooks/useLoadScript';
import '../../styles/map.css';

const ScoreMap = ({ marker, location }) => {
    const isLoaded = useLoadGoogleMaps();
    const mapRef = useRef(null);

    useEffect(() => {
        if (isLoaded) {
            loadMap();
        }
    }, [isLoaded]);

    const loadMap = async () => {
        const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

        const map = new google.maps.Map(mapRef.current, {
            center: { lat: 0, lng: 0 },
            zoom: 1,
            disableDefaultUI: true,
            zoomControl: true,
            mapId: 'DEMO_MAP_ID',
        });

        const pinBackground = new PinElement({
            background: "#00FF00",
            glyphColor: "#FFF",
        });
        
        const locationMarker = new AdvancedMarkerElement({
            map,
            position: location,            
            title: "Correct Location",
            content: pinBackground.element,
        });

        const markerLocation = marker.split(',');
        const markerLat = parseFloat(markerLocation[0].slice(1));
        const markerLng = parseFloat(markerLocation[1].slice(0, -1));

        const userMarker = new AdvancedMarkerElement({
            map,
            position: { lat: markerLat, lng: markerLng },
            title: "Your Guess",
        });

        const bounds = new google.maps.LatLngBounds();
        bounds.extend(location);
        bounds.extend({ lat: markerLat, lng: markerLng });
        map.fitBounds(bounds);

        const line = new google.maps.Polyline({
            path: [location, { lat: markerLat, lng: markerLng }],
            strokeColor: "#FF0000",
            strokeOpacity: 0,
            icons: [
                {
                    icon: { path: "M 0,-1 0,1", strokeOpacity: 0.5, scale: 1 }, // Define o traço
                    offset: "0", // Posição inicial do padrão
                    repeat: "4px", // Distância entre os traços
                },
            ],  
        });

        line.setMap(map);

    };

    return (
        <div>
            {isLoaded ? (
                <div id="scoremap" ref={mapRef} />
            ) : (
                <p className="loading-text-map">Loading...</p>
            )}
        </div>
    );
};

export default ScoreMap;
