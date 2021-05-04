import React, { Component } from 'react';

import './sign-in.scss';

import FormInput from '../forms/FormInput';

import Button from '../utility-components/buttons/Button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    signInUser = (e) => {
        e.preventDefault();
        // this.setState({
        //     email: '',
        //     password: '',
        // });
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
          <div className='sign-in-container'>
              <h2>Log-in</h2>
              <span>Sign-in using your email and password.</span>
              <form onSubmit={this.signInUser}>
                
                <FormInput id='email' type='text' name='email' onChange={this.handleChange} value={this.state.email} label="Email" required></FormInput>
                <FormInput id='password' type='password' name='password' onChange={(e) => { this.setState({password: e.target.value}) }} label="Password" value={this.state.password} required></FormInput>
                <div className='buttons'>
                    <Button type='submit'>Sign-in</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</Button>
                </div>
              </form>
          </div>  
        );
    }
}

export default SignIn;