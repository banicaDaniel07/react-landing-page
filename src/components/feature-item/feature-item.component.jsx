import React from 'react';

import './feature-item.styles.scss';

const FeatureItem = ({icon, title, children, classType}) => {
    return (
        <div className={`feature-${classType}`}>
            <div className={`feature-${classType}__image`}><i className={icon}></i></div>
            <h2 className={`feature-${classType}__title`}>{title}</h2>
            <h3 className={`feature-${classType}__info`}>{children}</h3>
        </div>
    )
}

export default FeatureItem
