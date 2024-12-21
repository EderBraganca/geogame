import React from 'react';
import StartGameButton from '../components/StartGameButton';
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