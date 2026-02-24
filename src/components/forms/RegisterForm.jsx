import GenericButton from "../buttons/GenericButton";
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import "../../styles/login.css";

const RegisterForm = () => {
    return (
        <section className="registerForm">
            <h1>Register</h1>
            <form>
                <Field>
                    <FieldLabel htmlFor="name" className="formLabel">Name:</FieldLabel>
                    <Input className="formInput" placeholder="Enter your name." type="text" id="name" name="name" required />
                </Field>
                <Field>
                    <FieldLabel htmlFor="email" className="formLabel">Email:</FieldLabel>
                    <Input className="formInput" placeholder="Enter your email address." type="email" id="email" name="email" required />
                </Field>
                <Field>
                    <FieldLabel htmlFor="password" className="formLabel">Password:</FieldLabel>
                    <Input className="formInput" placeholder="Enter your password." type="password" id="password" name="password" required />
                </Field>
                <GenericButton
                    text="Register"
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

export default RegisterForm;