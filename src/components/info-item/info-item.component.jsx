import React from 'react';

import './info-item.styles.scss';

const InfoItem = ({children}) => {
    return (
        <div className='info'>
            <i class="fas fa-check"></i>
            {children}
        </div>
    )
}

export default InfoItem
