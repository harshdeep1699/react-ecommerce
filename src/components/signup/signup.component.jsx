import React from 'react';
import { auth, createUserDocument } from '../../firebase/firebase.util';
import CustomButton from '../custom-button/customButton.component';
import FormInput from '../form-input/form-input.component';
import './signup.styles.scss';


class Signup extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }

    }
    handleSubmit= async event =>{
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword)
        {
        alert('passwords dont match');
        return; 
        }
        const user=await auth.createUserWithEmailAndPassword(this.state.email,this.state.password);
        console.log(user);
        //createUserDocument(this.state);
        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
    }
    handleChange= event=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value})

    }
    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I dont have an account</h2>
                <span>Sign up with email</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    >
                    </FormInput>
                    <FormInput 
                    type='text'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    >
                    </FormInput>
                    <FormInput 
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    >
                    </FormInput>
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    >
                    </FormInput>
                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}
export default Signup;