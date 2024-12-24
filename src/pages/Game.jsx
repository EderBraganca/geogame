import React, { useState, useEffect } from 'react';
import Round from '../components/Round';
import FinishRoundButton from '../components/utils/FinishRoundButton';
import FinishRoundMenu from '../components/menus/FinishRoundMenu';
import StartGameButton from '../components/utils/StartGameButton';
import * as geolib from 'geolib';


const Game = () => {
    const [marker, setMarker] = useState(null);
    const [location, setLocation] = useState(null);
    const [roundScore, setRoundScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [isRoundFinished, setIsRoundFinished] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        setIsButtonEnabled(marker !== null);
    }, [marker]);

    const handleFinishRound = () => {
        setIsRoundFinished(true);
        calculateScore(totalScore);
    }

    const handleNextRound = () => {
        setIsRoundFinished(false);
        setMarker(null);
    }

    const calculateScore = (totalScore) => {
        const markerLat = parseFloat(marker.split(',')[0].slice(1));
        const markerLng = parseFloat(marker.split(',')[1].slice(0, -1));
        const locationLat = location.lat;
        const locationLng = location.lng;

        const distance = geolib.getDistance(
            { latitude: locationLat, longitude: locationLng },
            { latitude: markerLat, longitude: markerLng }
        );
        
        let roundScore = 5000;

        if (distance > 1000) {
            roundScore -= Math.floor(distance / 3000);
            if (roundScore < 0) {
                roundScore = 0;
            }
        }

        setRoundScore(roundScore);
        setTotalScore(totalScore + roundScore);
    }

    return (
        <div>
            {!isRoundFinished && (
                <Round  
                    setMarker={setMarker}
                    setLocation={setLocation}
                />
            )}
            {!isRoundFinished && (
                <FinishRoundButton 
                    isDisabled={isButtonEnabled} 
                    onClick={handleFinishRound} 
                />
            )}
            {isRoundFinished && 
                <FinishRoundMenu 
                    totalScore={totalScore} 
                    roundScore={roundScore}
                    marker={marker} 
                    location={location}/>
            }
            {isRoundFinished &&
                <StartGameButton 
                    text='Next Round'
                    onClick={handleNextRound} 
                />
            }

        </div>
    );
}
export default Game;