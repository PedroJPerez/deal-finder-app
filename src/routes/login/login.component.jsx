import { useState } from "react";
import { SignIn } from "../../utils/auth/cognito.utils";

const defaultFormFields = {
    username: '',
    password: ''
};

const Login = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);

    console.log('STATE', formFields);

    const {username, password} = formFields;

    const handleChange = (event) =>{
        const {name, value} =  event.target;

        setFormFields({...formFields, [name]: value});
    }

    const clearFormFields = () =>{
        setFormFields(defaultFormFields);
        console.log(username, password);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        console.log(event);

        const user = await SignIn(username, password);
        console.log(user);
        clearFormFields();

    }

    return(
        <div>
            <h1>This is the Login Page</h1>
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <label>Email</label>
                <input required type="email" onChange={handleChange} name="username" value={username}></input>
                <label>Password</label>
                <input required type="password" onChange={handleChange} name="password" value={password}></input>
                <button type="submit">Sign in</button>
            </form>
            <p>create an account here</p>
        </div>
    );
}

export default Login;