import GenericButton from "../buttons/GenericButton";
import { FaGlobeAmericas } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import '../../styles/header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="headerContainer">
            <div className="icon">
                <a
                    onClick={() =>
                        navigate("/")
                    }
                    onMouseEnter={(e) => {
                        e.target.style.cursor = 'pointer';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.cursor = 'default';
                    }}
                >
                    <FaGlobeAmericas size={30} color="var(--color-five)" />
                    <p className="iconText">GeoGame</p>
                </a>
            </div>
            <nav className="headerButtons">
                <HashLink smooth to="/#howToPlay">
                    How to play
                </HashLink>
                <a href="https://ederbraganca.github.io" target="_blank" rel="noopener noreferrer">
                    About Us
                </a>
                <GenericButton
                    text="Login"
                    color="var(--color-five)"
                    textColor="black"
                    height="30px"
                    onClick={() =>
                        navigate("/login")
                    }
                />
            </nav>
        </header >
    );
};

export default Header;