import React from 'react';
import StreetView from '../components/StreetView';
import MapView from '../components/MapView';

const Round = ({setMarker}) => {
    return (
        <div>
            <StreetView />
            <MapView 
                setMarker={setMarker}
            />
        </div>
    )
}

export default Round;