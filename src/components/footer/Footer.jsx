import "./../../styles/footer.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-container">
            <nav className="copyright-nav">
                <p className="footer-text">© 2026 Eder Bragança</p>
            </nav>
            <nav className="github-nav">
                <a href="https://github.com/EderBraganca" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} color="white" className="github-icon" />
                    <p className="footer-text">Github</p>
                </a>
            </nav>
            <nav className="linkedin-nav">
                <a href="https://linkedin.com/in/eder-braganca" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={20} color="white" className="github-icon" />
                    <p className="footer-text">Linkedin</p>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;