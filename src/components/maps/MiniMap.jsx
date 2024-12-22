import React, { useEffect, useRef} from 'react';
import useLoadGoogleMaps from '../../hooks/useLoadScript';
import '../../styles/map.css';

const MiniMap = ({setMarker}) => {
    const isLoaded = useLoadGoogleMaps();
    const mapRef = useRef(null);
    const markerRef = useRef(null); // Referência para o marcador existente

    useEffect(() => {
        if (isLoaded) {
            loadMap();
        }
    }, [isLoaded]);

    const loadMap = async () => {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        const map = new google.maps.Map(mapRef.current, {
            center: { lat: 0, lng: 0 },
            zoom: 2,
            disableDefaultUI: true,
            zoomControl: true,
            mapId: 'DEMO_MAP_ID',
        });

        // Listener de clique no mapa
        map.addListener("click", (event) => {
            addMarker(map, event.latLng);
        });

        const addMarker = (map, location) => {
            // Se já existir um marcador, atualize sua posição
            if (markerRef.current) {
                markerRef.current.position = location;
            } else {
                const newMarker = new AdvancedMarkerElement({
                    map,
                    position: location,
                    gmpDraggable: true,
                });

                markerRef.current = newMarker; // Salve a referência do marcador
            }

            setMarker(location.toString());
        };
    };

    return (
        <div>
            {isLoaded ? (
                <div id="map" ref={mapRef} />
            ) : (
                <p className="loading-text-map">Loading...</p>
            )}
        </div>
    );
};

export default MiniMap;
