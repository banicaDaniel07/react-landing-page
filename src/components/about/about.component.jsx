import React from 'react';
import Title from '../title/title.component';

import './about.styles.scss';

const About = () => {
    return (
        <div className='about'>
            <div className="about__container">
                <div className="about__image"></div>
                <div className="about__info">
                    <Title className='about__title' classExtra={'text-start'}>ABOUT US</Title>
                    <p className='about__aboutUs'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h5 className="about__subtitle">Why Choose Us?</h5>
                    <div className='about__context'> 
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
