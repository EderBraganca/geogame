import React, { useEffect, useRef, useState } from 'react';
import useLoadGoogleMaps from '../hooks/useLoadScript';
import '../styles/map.css';

const MapView = () => {
    const isLoaded = useLoadGoogleMaps();
    const mapRef = useRef(null);
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        if (isLoaded) {
            loadMap();
        }
    }, [isLoaded]);

    const loadMap = async () => {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        const map = new google.maps.Map(
            mapRef.current,
            {
                center: { lat: 0, lng: 0 },
                zoom: 2,
                disableDefaultUI: true,
                zoomControl: true,
                mapId: 'DEMO_MAP_ID'
            }
        );

        map.addListener("click", (event) => {
            console.log(marker)
            if (marker) {
                switchMarkerPosition(event.latLng);
            }
            addMarker(map, event.latLng);
        });

        const addMarker = (map, location) => {
            const dmarker = new AdvancedMarkerElement({
                map,
                position: location,
                gmpDraggable: true,
            });
            
            dmarker.addListener("click", (event) => {
                // Remove AdvancedMarkerElement from Map
                dmarker.map = null;
            });

            map.addListener("click", (event) => {
                // Set AdvancedMarkerView position and add to Map
                dmarker.position = event.latLng;
                dmarker.map = map;
            });
            setMarker(dmarker);
        };

        const switchMarkerPosition = (location) => {
            marker.map = null;
            marker.position = location;
            setMarker(marker);
        };
    }

    return (
        <div>
            {isLoaded ? (
                <div id="map" ref={mapRef} />
            ) : (<p className="loading-text-map">Carregando o mapa...</p>)}
        </div>
    );
};
export default MapView;
