import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './hero.styles.scss';

const HeroSection = () => {
    return (
        <div className='hero'>
            <div className='hero__container'>
                <h1 className="hero__title">WE ARE A LANDING PAGE</h1>
                <h3 className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</h3>
                <CustomButton>LEARN MORE</CustomButton>
            </div>
        </div>
    )
}

export default HeroSection
