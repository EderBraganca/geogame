import GenericButton from "../buttons/GenericButton";
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import "../../styles/login.css";

const LoginForm = () => {
    return (
        <section className="loginForm">
            <h1>Login</h1>
            <form>
                <Field>
                    <FieldLabel htmlFor="email" className="formLabel">Email:</FieldLabel>
                    <Input className="formInput" placeholder="Enter your email address" type="email" id="email" name="email" required />
                </Field>
                <Field>
                    <FieldLabel htmlFor="password" className="formLabel">Password:</FieldLabel>
                    <Input className="formInput" placeholder="Enter your password." type="password" id="password" name="password" required />
                </Field>
                <GenericButton
                    text="Login"
                    color="var(--color-five)"
                    textColor="black"
                    height="30px"
                    onClick={() =>
                        navigate("/")
                    }
                />
            </form>
        </section>
    )
}

export default LoginForm;