import React from 'react';
import FeatureItem from '../feature-item/feature-item.component';
import Title from '../title/title.component';

import './features.styles.scss';

const FeaturesSection = () => {
    return (
        <div className='features' id='features'>
            <Title className='feature__title' classExtra={'text-center margin-bottom'}>FEATURES</Title>
            <div className='feature__container'>
                <FeatureItem 
                icon={'fas fa-comments'} 
                title={'Lorem ipsum'}
                classType={'small'}>
                    Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-bullhorn'} 
                title={'Lorem ipsum'}
                classType={'small'}>
                    Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-users'} 
                title={'Lorem ipsum'}
                classType={'small'}>
                    Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-magic'} 
                title={'Lorem ipsum'}
                classType={'small'}>
                    Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                </FeatureItem>
                
            </div>
            
        </div>
    )
}

export default FeaturesSection
