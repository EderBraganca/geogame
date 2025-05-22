import React, { useEffect, useState } from 'react';
import StreetView from '../maps/StreetView';
import MiniMap from '../maps/MiniMap';
import streetview from 'awesome-streetview';

const selectGamemode = (gamemode) => {
    let prop = {};
    
    prop.linksControl = false;

    if(gamemode === 'movie'){
        prop.zoomControl = true;
        prop.scrollwheel = true;
        prop.clickToGo = true;
    }
    else if(gamemode === 'noMovie'){
        prop.zoomControl = true;
        prop.scrollwheel =  true;
        prop.clickToGo = true;
    }
    else if(gamemode === 'npz'){
        prop.zoomControl = false;
        prop.scrollwheel = false;
        prop.clickToGo = false;
    }
    return prop;
}

const Round = ({gamemode, setMarker, setLocation}) => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    let props = selectGamemode(gamemode);

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
                props={props}
            />
            <MiniMap 
                setMarker={setMarker}
            />
        </div>
    )
}

export default Round;