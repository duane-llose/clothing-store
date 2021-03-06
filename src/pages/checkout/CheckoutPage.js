import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import './checkout-page.scss';

// const mapStateToProps = function(state) {
//     return {
//         cart: state.cart
//     }
// }

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

// const mapDispatchToProps = () => {

// }

function CheckoutPage({cartItems, total}) {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)}
            <div className='total'>
                <span>Total: ${total}</span>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(CheckoutPage);