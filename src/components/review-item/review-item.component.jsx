import React from 'react';

import './review-item.styles.scss';

const ReviewItem = ({photo, children, name}) => {
    return (
        <div className='review'>
            <div className={`review__image ${photo}`}></div>
            <div className="review__content">
                <p className="review__text">''{children}''</p>
                <h3 className="review__name">- {name}</h3>
            </div>
        </div>
    )
}

export default ReviewItem
