import ScoreMap from "../maps/ScoreMap";
import "../../styles/game.css";

const FinishRoundMenu = ({ totalScore, roundScore, location, marker }) => {
    return (
        <div className="finishRoundContainer">
            <h1 className="finishRoundTitle">Round finish</h1>
            <div className="scoreContainer">
                Your score is {roundScore} / 5000<br />
                Total: {totalScore}
            </div>

            <ScoreMap
                location={location}
                marker={marker} />
        </div>
    );
};

export default FinishRoundMenu;