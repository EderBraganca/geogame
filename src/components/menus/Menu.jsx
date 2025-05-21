import GenericButton from "../buttons/genericButton";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    return (
        <div className="main-menu">
            <h1 className="menuTitle">GeoGame</h1>
            <h2 className="menuSubTitle">Your favorite place is hee</h2>
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
                    color='var(--color-one)'
                    onClick={() => {
                        console.log('Pratice clicked');
                    }}
                />
            </div>
        </div>
    );
}
export default Menu;
