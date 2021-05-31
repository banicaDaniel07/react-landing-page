import React from 'react';

import './info-item.styles.scss';

const InfoItem = ({children}) => {
    return (
        <div className='info'>
            <i className="fas fa-check"></i>
            {children}
        </div>
    )
}

export default InfoItem
