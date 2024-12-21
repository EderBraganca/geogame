import React, { useState, useEffect } from 'react';
import Round from '../components/Round';
import FinishRoundButton from '../components/FinishRoundButton';
import FinishRoundMenu from '../components/FinishRoundMenu';
import StartGameButton from '../components/StartGameButton';

const Game = () => {
    const [marker, setMarker] = useState(null);
    const [isRoundFinished, setIsRoundFinished] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        setIsButtonEnabled(marker !== null);
    }, [marker]);

    const handleFinishRound = () => {
        setIsRoundFinished(true);
    }

    const handleNextRound = () => {
        setIsRoundFinished(false);
        setMarker(null);
    }

    return (
        <div>
            {!isRoundFinished && (
                <Round  
                    setMarker={setMarker}
                />
            )}
            {!isRoundFinished && (
                <FinishRoundButton 
                    isDisabled={isButtonEnabled} 
                    onClick={handleFinishRound} 
                />
            )}
            {isRoundFinished && 
                <FinishRoundMenu />
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