import React, { useState, useEffect } from 'react';
import Round from '../components/Round';
import FinishRoundButton from '../components/utils/FinishRoundButton';
import FinishRoundMenu from '../components/menus/FinishRoundMenu';
import StartGameButton from '../components/utils/StartGameButton';
import GenericButton from '../components/buttons/genericButton';
import { useNavigate } from 'react-router-dom';
import * as geolib from 'geolib';


const Game = () => {
    const [marker, setMarker] = useState(null);
    const [location, setLocation] = useState(null);
    const [roundScore, setRoundScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [isRoundFinished, setIsRoundFinished] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const navigate = useNavigate();

    const handleBackToMenu = () => {
        navigate('/');
    }

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
            roundScore -= Math.floor(distance / 1000);
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
                    gamemode="movie"
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
                <GenericButton
                    className='nextRoundButton'
                    text='Next Round'
                    color={'var(--color-four)'}
                    onClick={handleNextRound} 
                />
            }
            {isRoundFinished &&
                <GenericButton 
                    text='Back to menu'
                    className='backToMenuButton'
                    color='var(--color-five)'
                    textColor='black'
                    onClick={handleBackToMenu}
                />
            }

        </div>
    );
}
export default Game;