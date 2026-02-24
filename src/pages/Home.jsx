import Footer from '../components/footer/footer';
import Menu from '../components/menus/Menu';
import HowToPlayMenu from '../components/menus/HowToPlayMenu';

const Home = () => {
    return (
        <div>
            <Menu />
            <HowToPlayMenu id='howToPlay'/>
            <Footer />
        </div>
    )
}

export default Home;