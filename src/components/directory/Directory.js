import React, { Component } from 'react';

import MenuItem from '../menu-item/MenuItem';

import './directory.scss';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                title: 'hats',
                // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                imageUrl: '/images/hats.jpg',
                id: 1,
                linkUrl: 'shop/hats',
                size: ''
              },
              {
                title: 'jackets',
                // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                imageUrl: '/images/jacket.jpg',
                id: 2,
                linkUrl: 'shop/jackets',
                size: ''
              },
              {
                title: 'sneakers',
                // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  imageUrl: '/images/shoes.jpg',
                id: 3,
                linkUrl: 'shop/sneakers',
                size: ''

              },
              {
                title: 'womens',
                // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                imageUrl: '/images/woman-half-resized.png',
                id: 4,
                linkUrl: 'shop/womens',
                // size: 'large'
              },
              {
                title: 'mens',
                // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                imageUrl: '/images/man-fashion.jpg',
                id: 5,
                linkUrl: 'shop/mens',
                // size: 'large'
              },
              {
                title: 'kids',
                // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                imageUrl: '/images/kids-shirt.jpg',
                id: 6,
                linkUrl: 'shop/kids',
                // size: 'large',

              }
            ]
        };
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} /> )}
            </div>
        );
    }
}

export default Directory;