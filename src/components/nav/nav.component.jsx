import React from 'react' 
import { Link } from 'react-router-dom';

import './nav.styles.scss';

const Navigation = () => {
    return (
            <div className='nav container'>
                <div className='nav__content'> 
                    <div className="nav__logo">REACT LANDING PAGE
                    </div>
                    <div className="nav__list">
                        <Link className='nav__link' to='/'>FEATURES</Link>
                        <Link className='nav__link' to='/'>ABOUT</Link>
                        <Link className='nav__link' to='/'>SERVICES</Link>
                        <Link className='nav__link' to='/'>GALLERY</Link>
                        <Link className='nav__link' to='/'>TESTIMONIALS</Link>
                        <Link className='nav__link' to='/'>TEAM</Link>
                        <Link className='nav__link' to='/'>CONTACT</Link>
                    </div>
                    <div className="nav__container">
                    <i className="fas fa-bars nav__menu"></i>
                    </div>
                </div>
            </div>
    )
}

export default Navigation
