import Header from "../components/header/header";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import InteractiveBackground from "../components/utils/InteractiveBackground";
import "../styles/login.css";

const Login = () => {
    return (
        <InteractiveBackground className="loginPage">
            <Header />
            <nav className="forms">
                <LoginForm />
                <div className="separator"/>
                <RegisterForm />
            </nav>
        </InteractiveBackground>
    )
}

export default Login;