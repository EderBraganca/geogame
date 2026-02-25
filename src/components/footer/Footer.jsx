import "./../../styles/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const shakeIcon = (iconClassName) => {
        const icon = document.querySelector(iconClassName);
        if (icon) {
            icon.style.animation = "shake 0.5s";
            setTimeout(() => {
                icon.style.animation = "";
            }, 500);
        }
    };

    return (
        <footer className="footer-container">
            <nav className="copyright-nav">
                <p className="footer-text">© 2026 Eder Bragança</p>
            </nav>
            <nav className="github-nav">
                <a href="https://github.com/EderBraganca" target="_blank" rel="noopener noreferrer" onMouseEnter={() => shakeIcon(".github-icon")}>
                    <FaGithub size={20} color="white" className="github-icon" />
                    <p className="footer-text">Github</p>
                </a>
            </nav>
            <nav className="linkedin-nav">
                <a href="https://linkedin.com/in/eder-braganca" target="_blank" rel="noopener noreferrer" onMouseEnter={() => shakeIcon(".linkedin-icon")}>
                    <FaLinkedin size={20} color="white" className="linkedin-icon" />
                    <p className="footer-text">Linkedin</p>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;