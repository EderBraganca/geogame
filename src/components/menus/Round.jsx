import { useEffect, useState } from 'react';
import StreetView from '../maps/StreetView';
import MiniMap from '../maps/MiniMap';
import { getRandomLocation } from '../../hooks/location';

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
        const location = getRandomLocation();
        console.log(location.id)
        const newLat = parseFloat(location.latitude);
        const newLng = parseFloat(location.longitude);
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