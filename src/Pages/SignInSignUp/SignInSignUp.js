import React from 'react';
import './SignInSignUp.scss';
import SignIn from '../../component/SignIn/SignIn';
import SignUp from '../../component/SignUp/SignUp';

const SignInSignUp = () => {
    return (
        <div className = 'SignInSignUp'>
            <SignIn/>
            <SignUp/>
        </div>
    );
};

export default SignInSignUp;