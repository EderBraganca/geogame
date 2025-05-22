import GenericButton from "../buttons/genericButton";
import { useNavigate } from "react-router-dom";
import Header from '../header/header';
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
                    onClick={() =>
                        navigate('/game')
                    }
                />
                <GenericButton
                    text='Pratice'
                    className='praticeButton'
                    color='var(--color-three)'
                    onClick={() => {
                        console.log('Pratice clicked');
                    }}
                />
            </div>
        </div>
    );
}
export default Menu;
