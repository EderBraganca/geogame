import React, { useEffect, useRef} from 'react';
import useLoadGoogleMaps from '../hooks/useLoadScript';
import '../styles/map.css';

const MapView = () => {
    const isLoaded = useLoadGoogleMaps();
    const mapRef = useRef(null);
    let marker = null;

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
            addMarker(map, event.latLng);
            marker = event.latLng.toString();
        });

        const addMarker = (map, location) => {
            const dmarker = new AdvancedMarkerElement({
                map,
                position: location,
                gmpDraggable: true,
            });
            
            dmarker.addListener("click", (event) => {
                dmarker.map = null;
            });

            map.addListener("click", (event) => {
                dmarker.position = event.latLng;
                dmarker.map = map;
            });
        };
    }

    return (
        <div>
            {isLoaded ? (
                <div id="map" ref={mapRef} />
            ) : 
            (<p className="loading-text-map">Carregando o mapa...</p>)}
        </div>
    );
};
export default MapView;
