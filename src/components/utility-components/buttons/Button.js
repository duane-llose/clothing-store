import React from 'react';
import './button.scss';

function Button(props) {
    return (
        <button type={props.type} className={` ${props.isGoogleSignIn ? 'btn-google-sign-in' : '' } btn`} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;