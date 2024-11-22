import '../styles/button.css'

const FinishRoundButton = ({isDisabled}) => {
    return ( 
        <button className='finishRoundButton' disabled={!isDisabled}>Finish Round</button>
    );
};

export default FinishRoundButton;