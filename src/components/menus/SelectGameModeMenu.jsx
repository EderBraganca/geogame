import GenericButton from "../buttons/GenericButton";
import '../../styles/menu.css';

const SelectGamemodeMenu = ({ gameModes, onSelect, backAction }) => {
    return (
        <div className="selectGamemodeMenu">                
            <h1 className="menuTitle">Select Game Mode</h1>
            <p className="menuSubTitle">Choose a game mode to start playing.</p>
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
            <GenericButton
                    text='Back'
                    className='backButton'
                    color='var(--color-one)'
                    width={'200px'}
                    fontSize={'16px'}
                    textColor='white'
                    onClick={backAction}
                />
        </div>
    );
}

export default SelectGamemodeMenu;