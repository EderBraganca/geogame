import React, { useEffect } from 'react';
import StreetView from '../components/StreetView';
import MapView from '../components/MapView';
import streetview from 'awesome-streetview';

const Round = ({setMarker, setLocation}) => {
    let num = Math.floor(Math.random() * 33);
    let lat = streetview.locations[num][0];
    let lng = streetview.locations[num][1];

    useEffect(() => {
        setLocation({lat, lng});
    }, [lat, lng, setLocation]);
    
    return (
        <div>
            <StreetView 
                lat={lat}
                lng={lng}
            />
            <MapView 
                setMarker={setMarker}
            />
        </div>
    )
}

export default Round;