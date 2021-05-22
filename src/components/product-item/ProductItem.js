import React from 'react';
import ProductCollection from '../product-collections/ProductCollection';

import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cartActions';

import './product-item.scss';

import Button from '../utility-components/buttons/Button';

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (item) => {
            return dispatch(addItemToCart(item))
        }
    }
}

function ProductItem({ item, addItemToCart }) {
    const { name, price, imageUrl} = item;
    return (
        <div className='product-item' >
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div className='product-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
                <Button onClick={() => addItemToCart(item)} inverted>Add to Card</Button>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(ProductItem);