import React from 'react';
import FeatureItem from '../feature-item/feature-item.component';
import Title from '../title/title.component';

import './services.styles.scss';

const Services = () => {
    return (
        <div className='services container'>
            <Title classExtra='no-background title-white'>OUR SERVICES</Title>
            <p className="service__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            <div className="service__container">
                <FeatureItem 
                icon={'fas fa-comments'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-comments'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-comments'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-comments'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-comments'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-comments'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                
            </div>
        </div>
    )
}

export default Services
