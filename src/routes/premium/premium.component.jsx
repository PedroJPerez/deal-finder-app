import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Premium = () => {
    return(
        <Authenticator>
            {({signOut}) =>(
                <div>
                    <h1>Hello you are signed in!</h1>
                <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
    )
}

export default Premium;