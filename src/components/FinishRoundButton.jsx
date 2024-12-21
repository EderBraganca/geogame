import '../styles/button.css'

const FinishRoundButton = ({isDisabled, onClick}) => {
    return ( 
        <button className='finishRoundButton' disabled={!isDisabled} onClick={onClick}>Finish Round</button>
    );
};

export default FinishRoundButton;