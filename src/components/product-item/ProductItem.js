import React from 'react';
import ProductCollection from '../product-collections/ProductCollection';


import './product-item.scss';

function ProductItem({ id, name, price, imageUrl }) {
    return (
        <div className='product-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div className='product-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
        </div>
    );
}

export default ProductItem;