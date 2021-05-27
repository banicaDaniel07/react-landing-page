import React from 'react';
import ImageItem from '../image-item/image-item.component';
import Title from '../title/title.component';

import './gallery.styles.scss';

const Gallery = () => {
    return (
        <div className='gallery'>
            <Title>GALLERY</Title>
            <p className="gallery__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            <div className='gallery__container'>
                <ImageItem background={1}>LOREM IPSUM</ImageItem>
                <ImageItem background={2}>LOREM IPSUM</ImageItem>
                <ImageItem background={3}>LOREM IPSUM</ImageItem>
                <ImageItem background={4}>LOREM IPSUM</ImageItem>
                <ImageItem background={5}>LOREM IPSUM</ImageItem>
                <ImageItem background={6}>LOREM IPSUM</ImageItem>
                <ImageItem background={7}>LOREM IPSUM</ImageItem>
                <ImageItem background={8}>LOREM IPSUM</ImageItem>
                <ImageItem background={9}>LOREM IPSUM</ImageItem>
            </div>
        </div>
    )
}

export default Gallery
