import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import './authenticate-page.scss';

function AuthenticationPage() {
    return (
        <div className='authentication-container'>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
}

export default AuthenticationPage;