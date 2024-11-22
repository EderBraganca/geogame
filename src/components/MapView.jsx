import React, { useEffect, useRef, useState} from 'react';
import useLoadGoogleMaps from '../hooks/useLoadScript';
import FinishRoundButton from './FinishRoundButton';
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
            addMarker(map, event.latLng);
        });

        const addMarker = (map, location) => {
            if (marker) {
                setMarker(null);
            }

            const newMarker = new AdvancedMarkerElement({
                map,
                position: location,
                gmpDraggable: true,
            });

            setMarker(location.toString()); 
            
            newMarker.addListener("click", (event) => {
                newMarker.map = null;
            });

            map.addListener("click", (event) => {
                newMarker.position = event.latLng;
                newMarker.map = map;
            });
        };
    }

    return (
        <div>
            {isLoaded ? (
                <div id="map" ref={mapRef}/>
            ) : 
            (<p className="loading-text-map">Loading...</p>)}
            <FinishRoundButton isDisabled={marker !== null}/>
        </div>
    );
};
export default MapView;
