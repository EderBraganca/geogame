import ScoreMap from "../maps/ScoreMap";

const FinishRoundMenu = ({score, location, marker}) => {
    return ( 
        <div>
            <h1>FinishRoundMenu</h1>
            <p>
                Your score is {score}
            </p>
            <ScoreMap 
                location={location} 
                marker={marker}/>
        </div>
    );
};

export default FinishRoundMenu;