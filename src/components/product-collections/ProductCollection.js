import React from 'react';

import './product-collection.scss';

import ProductItem from '../product-item/ProductItem';

function ProductCollection({ title, items, routeName }) {
    return (
        <div className='product-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4).map((item) => (
                    <ProductItem key={item.id} item={item}>{item.name}</ProductItem>
                ))}
            </div>
        </div>
    );
}

export default ProductCollection;