import React, { useState, useEffect } from 'react';
import Round from '../components/Round';
import FinishRoundButton from '../components/FinishRoundButton';
import FinishRoundMenu from '../components/FinishRoundMenu';
import StartGameButton from '../components/StartGameButton';

const Game = () => {
    const [marker, setMarker] = useState(null);
    const [location, setLocation] = useState(null);
    const [score, setScore] = useState(0);
    const [isRoundFinished, setIsRoundFinished] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        setIsButtonEnabled(marker !== null);
    }, [marker]);

    const handleFinishRound = () => {
        setIsRoundFinished(true);
        calculateScore(score);
    }

    const handleNextRound = () => {
        setIsRoundFinished(false);
        setMarker(null);
    }

    const calculateScore = (acumulatedScore) => {
        const markerLat = parseFloat(marker.split(',')[0].slice(1));
        const markerLng = parseFloat(marker.split(',')[1].slice(0, -1));
        const locationLat = location.lat;
        const locationLng = location.lng;
        let score = acumulatedScore;
        score += Math.abs(markerLat - locationLat);
        score += Math.abs(markerLng - locationLng);
        setScore(score);
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
                <FinishRoundMenu score={score}/>
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