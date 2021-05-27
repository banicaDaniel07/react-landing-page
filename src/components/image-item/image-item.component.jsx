import React from 'react';

import './image-item.styles.scss';

const ImageItem = ({children, background}) => {
    return (
        <div className={`image-item bg-${background}`}>
            <div className="image-item__overlay">
                <p className="image-item__info">{children}</p>
            </div>
        </div>
    )
}

export default ImageItem
