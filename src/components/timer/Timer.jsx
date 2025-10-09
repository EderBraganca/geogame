import { useState, useEffect } from 'react';
import '../../styles/timer.css';

const Timer = ({ seconds }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);
    
    return (
        <div className="timer">
            <h1>Time Remaining</h1>
            <p>{timeLeft} seconds</p>
        </div>
    );
}

export default Timer;