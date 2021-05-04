import React from 'react';

import { Link } from 'react-router-dom'; 

import './header.scss';

import { ReactComponent as Logo } from '../../assets/fedora-hat.svg';

import { auth } from '../../firebase/firebase.utils';

function Header({ currentUser }) {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser ? 
                    (
                    <div className='option' onClick={() => {auth.signOut()}}>
                        SIGN OUT
                    </div>
                    ) :
                    (
                    <Link className='option' to='/authenticate'>
                        SIGN IN
                    </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Header;