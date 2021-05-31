import React from 'react';
import InfoItem from '../info-item/info-item.component';
import Title from '../title/title.component';

import './about.styles.scss';

const About = () => {
    return (
        <div className='about' id='about-us'>
            <div className="about__container">
                <div className="about__image"></div>
                <div className="about__info">
                    <Title className='about__title' classExtra={'text-start'}>ABOUT US</Title>
                    <p className='about__aboutUs'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h5 className="about__subtitle">Why Choose Us?</h5>
                    <div className="about__context"> 
                         <InfoItem>Lorem ipsum dolor</InfoItem>
                         <InfoItem>Tempor incididunt</InfoItem>
                         <InfoItem>Lorem ipsum dolor</InfoItem>
                         <InfoItem>Incididunt ut labore</InfoItem>
                         <InfoItem>Aliquip ex ea commodo</InfoItem>
                         <InfoItem>Lorem ipsum dolor</InfoItem>
                         <InfoItem>Exercitation ullamco</InfoItem>
                         <InfoItem>Lorem ipsum dolor</InfoItem>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
