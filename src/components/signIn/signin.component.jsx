import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/customButton.component';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit= event=>{
        event.preventDefault();
        this.setState({email:'', password:''});
    }
    handleChange= event=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value});
    }
    render(){
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                <FormInput handleChange={this.handleChange} value={this.state.email} label='email' name='email' type='email' required></FormInput>
                
                <FormInput 
                handleChange={this.handleChange} 
                value={this.state.password} 
                name='password' 
                label='password'
                type='password' required>

                </FormInput>
                <div className='buttons'>
                <CustomButton type='submit'>Sign in</CustomButton>
                <CustomButton isGoogleButton onClick={signInWithGoogle}>Sign in with google</CustomButton>
                </div>
                
                
                </form>
            </div>
            
        )

    }
        
}
export default SignIn;