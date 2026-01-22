import { useState, useEffect } from 'react';
import '../../styles/timer.css';
import { useDispatch } from 'react-redux';
import { tick, resetTimer, startTimer } from '../../redux/timerSlice';

const Timer = ({ seconds }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startTimer({ duration: seconds }));
        setTimeLeft(seconds);
        const interval = setInterval(() => {
            dispatch(tick());
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => {
            clearInterval(interval);
            dispatch(resetTimer());
        };
    }, [seconds, dispatch]);

    return (
        <div className="timer">
            <h1>Time Remaining</h1>
            <p>{timeLeft} seconds</p>
        </div>
    );
}

export default Timer;