import React from 'react';

import { Link } from 'react-router-dom'; 

import './header.scss';

import { ReactComponent as Logo } from '../../assets/fedora-hat.svg';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/userActions';
import { setCartDrowndown } from '../../redux/cart/cartActions';

import { createStructuredSelector } from 'reselect';

import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { SelectCurrentUser } from '../../redux/user/userSelectors';

// import { selectCartItemsCount } from '../../redux/cart/cartSelectors/';

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.user.currentUser,
//         isCartDropdownOpen: state.cart.isCartDropdownOpen
//     }
// }

// const mapStateToProps = ({user: {currentUser}, cart: { isCartDropdownOpen, cartItems}} ) => {
//     return {
//         currentUser: currentUser,
//         isCartDropdownOpen: isCartDropdownOpen,
//         cartItems: cartItems
//     }
// }

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        isCartDropdownOpen: state.cart.isCartDropdownOpen,
        cartItems: state.cart.cartItems
    }
}


// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
//     isCartDropdownOpen: selectCartHidden,
//     cartItems: state.cart.cartItems
// });

// const mapDispatchToProps = function(dispatch) {
//     return {
//         isCartDropdownOpen: function (cart) {
//         return dispatch(setCartDrowndown(cart));
//       }
//     };
//   }

function Header({ currentUser, isCartDropdownOpen, cartItems, dispatch }) {
    // let total = cartItems.reduce((accumulator, currentValue) => );
    let totalItems = 0;
    if (cartItems.length) {
        totalItems = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }
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
                <CartIcon cartItemsLength={totalItems} handleClick={() => dispatch({ type: 'TOGGLE_CART_DROPDOWN_STATUS', payload: !isCartDropdownOpen })}></CartIcon>
            </div>
            {isCartDropdownOpen ? <CartDropdown cartItems={cartItems} /> : null }
        </div>
    );
}

export default connect(mapStateToProps, null)(Header);