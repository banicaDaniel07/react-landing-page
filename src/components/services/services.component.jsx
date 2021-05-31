import React from 'react';
import FeatureItem from '../feature-item/feature-item.component';
import Title from '../title/title.component';

import './services.styles.scss';

const Services = () => {
    return (
        <div className='services container' id='services'>
            <Title classExtra='no-background title-white'>OUR SERVICES</Title>
            <p className="service__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            <div className="service__container">
                <FeatureItem 
                icon={'fas fa-chart-line'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-cart-arrow-down'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-cloud-download-alt'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-language'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-plane'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                <FeatureItem 
                icon={'fas fa-chart-pie'} 
                title={'Lorem ipsum'}
                classType={'large'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </FeatureItem>
                
            </div>
        </div>
    )
}

export default Services
