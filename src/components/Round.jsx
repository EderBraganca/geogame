import React, { useEffect, useState } from 'react';
import StreetView from './StreetView';
import MiniMap from './maps/MiniMap';
import streetview from 'awesome-streetview';

const Round = ({gamemode, setMarker, setLocation}) => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    useEffect(() => {
        const rng = Math.floor(Math.random() * 33);
        const newLat = streetview.locations[rng][0];
        const newLng = streetview.locations[rng][1];
        
        setLat(newLat);
        setLng(newLng);
    }, []);
    

    return (
        <div>
            <StreetView 
                lat={lat}
                lng={lng}
                setLocation={setLocation}
            />
            <MiniMap 
                setMarker={setMarker}
            />
        </div>
    )
}

export default Round;