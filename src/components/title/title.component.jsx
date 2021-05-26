import React from 'react';

import './title.styles.scss';

const Title = ({children, classExtra}) => {
    return (
        <h1 className={`title ${classExtra}`}>
            {children}
        </h1>
    )
}

export default Title
