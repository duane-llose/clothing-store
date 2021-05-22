import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

// const mapDispatchToProps = dispatch => ({
//     // setCartDrowndown: () => dispatch(setCartDrowndown())
// });

import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

// const mapStateToProps = (state) => ({
//     itemCount: selectCartItemsCount(state)
// });


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});


function CartIcon({ cartItemsLength, handleClick, itemCount }) {
    return (
        <div onClick={handleClick} className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

// export default connect(null, mapyDispatchToProps)(CartIcon);

export default connect(mapStateToProps)(CartIcon);