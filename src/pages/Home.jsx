import React from 'react';
import StartGameButton from '../components/utils/StartGameButton';
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <StartGameButton 
                text='Start Game' 
                className='startGameButton' 
            />
        </div>
    )
}

export default Home;