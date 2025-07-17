import Header from "../components/header/header";
import SelectGamemodeMenu from "../components/menus/SelectGamemodeMenu";
import { useNavigate } from "react-router-dom";

const GamemodeSelect = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <Header />
            <SelectGamemodeMenu 
                gameModes={[
                    { name: "Movie", identifier: "movie" },
                    { name: "No Movie", identifier: "noMovie" }
                ]}
                onSelect={(mode) => {
                    navigate('/game', { state: { gamemode: mode.identifier, pratice: false }})
                }}
            />
        </>
    );
}

export default GamemodeSelect;