const StartGameButton = ({text, onClick}) => {
    return ( 
        <div>
            <button className='startGameButton' onClick={onClick}> 
                {text}
            </button>
        </div>
    );
};

export default StartGameButton;