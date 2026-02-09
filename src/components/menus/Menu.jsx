import GenericButton from "../buttons/GenericButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from '../header/Header';
import SelectGamemodeMenu from "./SelectGamemodeMenu";
import { useDispatch } from "react-redux";
import { startGame } from "../../redux/gameSlice";
import "../../styles/menu.css";

const Menu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showSelectGamemode, setShowSelectGamemode] = useState(false);

    return (
        <div className="mainMenu">
            <Header />
            {
                !showSelectGamemode &&
                <h1 className="menuTitle">GeoGame</h1>
            }
            {
                !showSelectGamemode &&
                <h2 className="menuSubTitle">Your favorite place is here</h2>
            }
            <div className="menuButtons">
                {
                    !showSelectGamemode &&
                    <GenericButton
                        text='Start Game'
                        className='startGameButton'
                        color='var(--color-five)'
                        textColor='black'
                        width={'200px'}
                        fontSize={'16px'}
                        onClick={() =>
                            setShowSelectGamemode(true)
                        }
                    />
                }{
                    !showSelectGamemode &&
                    <GenericButton
                        text='Pratice'
                        className='praticeButton'
                        color='var(--color-three)'
                        width={'200px'}
                        fontSize={'16px'}
                        onClick={() => {
                            dispatch(startGame({ name: "movie"}))
                            navigate('/game', { state: { gamemode: "movie", pratice: true } })
                        }}
                    />
                }
                {
                    showSelectGamemode &&
                    <SelectGamemodeMenu
                        gameModes={[
                            { name: "Movie", identifier: "movie" },
                            { name: "No Movie", identifier: "noMovie" }
                        ]}
                        onSelect={(mode) => {
                            navigate('/game', { state: { gamemode: mode.identifier, pratice: false } })
                        }}
                        backAction={() => setShowSelectGamemode(false)}
                    />
                }
            </div>
        </div>
    );
}
export default Menu;
