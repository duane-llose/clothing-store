import React from 'react';

import { connect } from 'react-redux';

import Button from '../utility-components/buttons/Button';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';

import { setCartDrowndown } from '../../redux/cart/cartActions';

import './cart-dropdown.scss';

function CartDropdown({cartItems, history, dispatch }) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} ></CartItem>) : <span className='empty-message'>Your cart is empty</span>}
                <Button 
                    onClick={() => { 
                        history.push('/checkout') 
                        dispatch({ type: 'TOGGLE_CART_DROPDOWN_STATUS', payload: false });
                        }
                }>Go To Checkout</Button>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
// export default CartDropdown;