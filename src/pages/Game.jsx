import React, { useState, useEffect } from 'react';
import Round from '../components/menus/Round';
import FinishRoundButton from '../components/utils/FinishRoundButton';
import FinishRoundMenu from '../components/menus/FinishRoundMenu';
import GenericButton from '../components/buttons/genericButton';
import Timer from '../components/timer/timer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nextRound, endGame } from '../redux/gameSlice';
import '../styles/game.css';
import * as geolib from 'geolib';

const Game = () => {
    const usr = window.history.state.usr || null;
    const { gamemode, pratice } = usr || { gamemode: "movie", pratice: false };
    const [maxRounds] = useState(5);
    const [marker, setMarker] = useState(null);
    const [location, setLocation] = useState(null);
    const [roundScore, setRoundScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [isRoundFinished, setIsRoundFinished] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const timerState = useSelector((state) => state.timer);
    const round = useSelector((state) => state.game.round);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBackToMenu = () => {
        navigate('/');
    }

    useEffect(() => {
        setIsButtonEnabled(marker !== null);

        if (timerState.remaining === 0 && !isRoundFinished) {
            handleFinishRound();
        }
    }, [timerState.remaining]);

    const handleFinishRound = () => {
        setIsRoundFinished(true);
        calculateScore(totalScore);
        verifyEndGame();
    }

    const verifyEndGame = () => {
        if (round >= maxRounds) {
            dispatch(endGame());
        } else {
            dispatch(nextRound());
        }
    }

    const handleNextRound = () => {
        setIsRoundFinished(false);
        setMarker(null);
    }

    const calculateScore = (totalScore) => {
        if (!marker || !location) {
            setRoundScore(0);
            return;
        }

        const markerLat = parseFloat(marker?.split(',')[0].slice(1));
        const markerLng = parseFloat(marker?.split(',')[1].slice(0, -1));

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

    // TODO: Loading page with a chronometer between rounds

    // TODO: end game if round > maxRounds

    return (
        <div className='no-scroll'>
            {!isRoundFinished &&
                <div className='gameHeader'>
                    <div className='timerContainer'>
                        <Timer seconds={pratice ? 120 : 30} />
                    </div>
                    <Round
                        setMarker={setMarker}
                        setLocation={setLocation}
                        gamemode={gamemode}
                    />
                    < FinishRoundButton
                        isDisabled={isButtonEnabled}
                        onClick={handleFinishRound}
                    />
                </div>
            }
            {isRoundFinished &&
                <nav className='nextRoundNav'>
                    <p className='roundInfo'>Round {round} of {maxRounds}</p>
                    <FinishRoundMenu
                        totalScore={totalScore}
                        roundScore={roundScore}
                        marker={marker}
                        location={location} />
                    <nav className='buttonsContainer'>
                        {
                            <GenericButton
                                text='Next Round'
                                color={'var(--color-four)'}
                                onClick={handleNextRound}
                                hidden={round >= maxRounds}
                            />
                        }
                        <GenericButton
                            text='Back to menu'
                            color='var(--color-five)'
                            textColor='black'
                            onClick={handleBackToMenu}
                        />
                    </nav>
                </nav>
            }

        </div>
    );
}
export default Game;