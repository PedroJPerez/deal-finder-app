import { useState } from "react";
import {SignUp} from '../../utils/auth/cognito.utils';

const defaultFormFields = {
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
}

const RegisterForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);

    console.log(formFields);

    const { FirstName, LastName, Email, Password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const clearFormFields = () =>{
        setFormFields(defaultFormFields);
        console.log(FirstName, LastName, Email, Password);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        console.log(FirstName, LastName, Email, Password);

        const hello = await SignUp(FirstName, LastName, Email, Password);
        console.log(hello);
        clearFormFields();
    }

    return (
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <label>First Name</label>
                <input required type="text" onChange={handleChange} name="FirstName" value={FirstName} />
                <label>Last Name</label>
                <input required type="text" onChange={handleChange} name="LastName" value={LastName} />
                <label>Email</label>
                <input required type="email" onChange={handleChange} name="Email" value={Email} />
                <label>Password</label>
                <input required type="password" onChange={handleChange} name="Password" value={Password} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default RegisterForm;