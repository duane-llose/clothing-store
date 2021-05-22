import React from 'react';
import FormInput from '../forms/FormInput';
import Button from '../utility-components/buttons/Button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        console.log(displayName);
        if (password !== confirmPassword) {
            console.log('Not matching');
            //display error message
            return;
        }
        try {
            // const 
            auth.createUserWithEmailAndPassword(email, password).then(person => {
                createUserProfileDocument(person, { displayName }).then(() => {
                    //clear form
                    this.setState({
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    })
                });
            }).catch(e => {
                console.log(e);
            });
        } catch(e) {
            console.log(e);
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>No Account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required></FormInput>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required></FormInput>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required></FormInput>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required></FormInput>
                    <Button type='submit'>SIGN UP</Button>
                </form>
            </div>
        );
    }
}

export default SignUp;