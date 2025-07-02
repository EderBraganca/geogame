import GenericButton from "../buttons/GenericButton";
import { useNavigate } from "react-router-dom";
import Header from '../header/Header';
import "../../styles/menu.css";

const Menu = () => {
    const navigate = useNavigate();

    return (
        <div className="mainMenu">
            <Header />
            <h1 className="menuTitle">GeoGame</h1>
            <h2 className="menuSubTitle">Your favorite place is here</h2>
            <div className="menuButtons">
                <GenericButton
                    text='Start Game'
                    className='startGameButton'
                    color='var(--color-five)'
                    textColor='black'
                    width={'200px'}
                    fontSize={'16px'}
                    onClick={() =>
                        navigate('/game')
                    }
                />
                <GenericButton
                    text='Pratice'
                    className='praticeButton'
                    color='var(--color-three)'
                    width={'200px'}
                    fontSize={'16px'}
                    onClick={() => {
                        console.log('Pratice clicked');
                    }}
                />
            </div>
        </div>
    );
}
export default Menu;
