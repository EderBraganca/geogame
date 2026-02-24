import '../../styles/menu.css';
import HowToPlayCard from '../card/howToPlayCard';

const HowToPlayMenu = ({ id }) => {
    return (
        <div className="howToPlayContainer" id={id}>
            <h2 className='htpTitle'>How to Play</h2>
            <p className='htpSubTitle'>Here are the rules:</p>

            <HowToPlayCard
                title="Rule 1"
                content="Realize o cadastro" />
            <HowToPlayCard
                title="Rule 2"
                content="Tente clicar o mais próximo possível de onde você está no mapa" />
            <HowToPlayCard
                title="Rule 3"
                content="Explore o mundo!" />
            <p className='htpSubTitle'> Good luck and have fun!</p>
        </div>
    );
}

export default HowToPlayMenu;