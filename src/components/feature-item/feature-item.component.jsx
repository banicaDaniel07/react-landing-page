import React from 'react';

import './feature-item.styles.scss';

const FeatureItem = ({icon, title, children}) => {
    return (
        <div className='feature'>
            <div className="feature__image"><i class={icon}></i></div>
            <h2 className="feature__title">{title}</h2>
            <h3 className="feature__info">{children}</h3>
        </div>
    )
}

export default FeatureItem
