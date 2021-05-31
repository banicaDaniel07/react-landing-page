import React from 'react';
import Title from '../title/title.component';

import './contact.styles.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact__title">
            <Title classExtra='text-start title-white'>GET IN TOUCH</Title>
            </div>
            <div className="contact__container">
            <div className="contact__left">
                <p className="contact__left__info">Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                <div className="contact__left__inputs">
                    <input type="text" name="Name" placeholder="Name" />
                    <input type="email" name="Email" placeholder="Email" />
                </div>
                <textarea name="Message" placeholder='Message' cols="20" rows="10"></textarea>
                <div className="contact__left__submit">SEND MESSAGE</div>
            </div>
            <div className="contact__right">
                <h3 className="contact__right__info">Contact Info</h3>
                <div className="contact__right__address">
                <i className="fas fa-map-marker-alt"></i><span>Address</span>
                <p className="contact__right__address__info">4321 California St, San Francisco, CA 12345</p>
                </div>
                <div className="contact__right__phone">
                <i className="fas fa-phone"></i><span>Phone</span>
                <p className="contact__right__phone__info">+1 123 456 1234</p>
                </div>
                <div className="contact__right__email">
                <i className="far fa-envelope"></i><span>Email</span>
                <p className="contact__right__email__info">info@company.com</p>
                </div>
            </div>
            </div>

            <div className="social">
                <div className="social__container">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Contact
