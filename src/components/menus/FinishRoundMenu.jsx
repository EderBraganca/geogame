import ScoreMap from "../maps/ScoreMap";

const FinishRoundMenu = ({totalScore, roundScore, location, marker}) => {
    return ( 
        <div>
            <h1>Round finish</h1>
            <p>
                Your score is {roundScore} <br/>
                Total: {totalScore}
            </p>

            <ScoreMap 
                location={location} 
                marker={marker}/>
        </div>
    );
};

export default FinishRoundMenu;