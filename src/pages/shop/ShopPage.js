import React, { Component } from 'react';

import SHOP_DATA from './shop_data';

import ProductCollection from '../../components/product-collections/ProductCollection';


class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProp }) => {
                    return <ProductCollection key={id} {...otherCollectionProp}></ProductCollection>
                })}
            </div>
        );
    }

}

export default ShopPage;