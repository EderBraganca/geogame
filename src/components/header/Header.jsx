import GenericButton from "../buttons/GenericButton";
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
                    Menu
                </a>
            </div>
            <nav className="headerButtons">
                <a>
                    How to play
                </a>
                <a>
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
                <GenericButton
                    text="Sign up"
                    color="var(--color-three)"
                    height="30px"
                    onClick={() =>
                        navigate("/register")
                    }
                />
            </nav>
        </header>
    );
};

export default Header;