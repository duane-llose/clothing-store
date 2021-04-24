import React from 'react';

import './menu-item.scss';

const MenuItem = (props) => {
    return (
        <div className={`menu-item ${props.size}`}>
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${props.imageUrl})`
                }}
            >
        </div>
            <div className="content">
                <h1 className="title">{props.title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;