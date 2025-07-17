import { useNavigate } from "react-router-dom";

const FinishGame = ({score}) => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="finish-game">
                <h1>Congrats</h1>
                <p>Your final score is: {score}</p>
                <button onClick={() => navigate('/')}>Back to Menu</button>
            </div>
        </>
    );
}

export default FinishGame;