import '../../styles/button.css'

const FinishRoundButton = ({ isDisabled, onClick }) => {
    return (
        <button
            className='finishRoundButton'
            disabled={!isDisabled}
            onClick={onClick}
            onMouseEnter={(e) => {
                e.target.style.cursor = 'pointer';
                e.target.style.backgroundColor = 'var(--color-four)';
            }}
            onMouseLeave={(e) => {
                e.target.style.cursor = 'default';
                e.target.style.backgroundColor = 'var(--color-five)';
            }}
        >Finish Round</button>
    );
};

export default FinishRoundButton;