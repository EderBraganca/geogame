import GenericButton from "../buttons/GenericButton";
import '../../styles/menu.css';

const SelectGamemodeMenu = ({ gameModes, onSelect }) => {
    return (
        <div className="selectGamemodeMenu">
            <h1>Select Game Mode</h1>
            <p>Choose a game mode to start playing.</p>
            <section className="menuButtons">
                {gameModes.map((mode) => (
                    <GenericButton
                        text={mode.name}
                        onClick={() => onSelect(mode)}
                        className='gameModeButton'
                        color='var(--color-five)'
                        textColor='black'
                        width={'200px'}
                        fontSize={'16px'}
                    />
                ))}
            </section>
        </div>
    );
}

export default SelectGamemodeMenu;