import React from 'react';
import SignIn from '../../components/signIn/signin.component';
import Signup from '../../components/signup/signup.component';
import './signInRegister.styles.scss';

const SignInUp = ()=>{
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn></SignIn>
            <Signup></Signup>

        </div>
        
    )
}

export default SignInUp;