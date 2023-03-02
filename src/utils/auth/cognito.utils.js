import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports'
Amplify.configure(awsconfig);

const SignUp = async (firstName, lastName, email, password) =>{
    try{
        const {user} = await Auth.signUp({
            username: email,
            password: password,
            'custom:firstName': firstName,
            'custom:lastName': lastName
        })

        console.log(user);
    }
    catch(error){
        console.log(error);
    }
}

const SignIn = async(email, password) =>{
    try{
        const test = await Auth.signIn({
            username: email,
            password: password
        });

        console.log(test);
    }
    catch(error){
        console.log(error);
    }
}

const SignOut = async(user) =>{
    try {
        const signout =  await Auth.signOut();
        console.log(signout);
    } catch (error) {
        console.log(error);
        
    }
}

export {SignUp , SignIn, SignOut}; 