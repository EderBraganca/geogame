import { useEffect, useState } from 'react';
import StreetView from '../maps/StreetView';
import MiniMap from '../maps/MiniMap';
import { getRandomLocation } from '../../hooks/location';

const selectGamemode = (gamemode) => {
    let prop = {};
    
    if(gamemode === 'movie'){
        prop.scrollwheel = true;
        prop.clickToGo = true;
        prop.linksControl = true;
        prop.panControl = true;
    }
    else if(gamemode === 'noMovie'){
        prop.scrollwheel = true;
        prop.clickToGo = false;
        prop.disableDoubleClickZoom = true;
        prop.linksControl = false;
        prop.panControl = true;
        prop.disableDefaultUI = true;
        prop.keyboardShortcuts = false;
    }
    return prop;
}

const Round = ({gamemode, setMarker, setLocation}) => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    let props = selectGamemode(gamemode);

    useEffect(() => {
        const location = getRandomLocation();
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