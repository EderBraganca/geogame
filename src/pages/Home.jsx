import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartGameButton from '../components/utils/StartGameButton';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home</h1>
            <StartGameButton 
                text='Start Game' 
                className='startGameButton' 
                onClick={() => 
                    navigate('/game')
                }
            />
        </div>
    )
}

export default Home;