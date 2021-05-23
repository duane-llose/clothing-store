import React from 'react';

import './checkout-item.scss';

import { connect } from 'react-redux';

import { removeItemCollectionFromCart, addItemToCart, removeItemFromCart } from '../../redux/cart/cartActions';

function CheckoutItem({ cartItem, dispatch }) {
    const { id, name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={() => {dispatch(removeItemFromCart(cartItem))}}>&#8249;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => {dispatch(addItemToCart(cartItem))}}>&#8250;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => dispatch(removeItemCollectionFromCart(cartItem))}>&#10006;</div>
        </div>
    );
}

export default connect()(CheckoutItem);