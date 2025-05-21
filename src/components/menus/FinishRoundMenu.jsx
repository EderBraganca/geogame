import ScoreMap from "../maps/ScoreMap";
import "../../styles/game.css";

const FinishRoundMenu = ({totalScore, roundScore, location, marker}) => {
    return ( 
        <div className="finishRoundContainer">
            <h1>Round finish</h1>
            <p>
                Your score is {roundScore} / 5000<br/>
                Total: {totalScore}
            </p>

            <ScoreMap 
                location={location} 
                marker={marker}/>
        </div>
    );
};

export default FinishRoundMenu;