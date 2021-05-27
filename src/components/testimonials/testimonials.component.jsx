import React from 'react';
import ReviewItem from '../review-item/review-item.component';
import Title from '../title/title.component';

import './testimonials.styles.scss';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <Title>WHAT OUR CLIENTS SAY</Title>
            <div className="testimonials__container">
                <ReviewItem photo='bg-01' name='John Doe'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</ReviewItem>
                <ReviewItem photo='bg-02' name='Johnathan Doe'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</ReviewItem>
                <ReviewItem photo='bg-03' name='John Doe'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</ReviewItem>
                <ReviewItem photo='bg-04' name='Johnathan Doe'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</ReviewItem>
                <ReviewItem photo='bg-05' name='John Doe'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</ReviewItem>
                <ReviewItem photo='bg-06' name='Johnathan Doe'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</ReviewItem>
            </div>
        </div>
    )
}

export default Testimonials
