import React , {useState} from 'react' 
import { Link } from "react-scroll";

import './nav.styles.scss';

const Navigation = () => {
    const [isShowing, ChangeShow] = useState(false)
    return (
            <div className='nav container'>
                <div className='nav__content'> 
                    <Link className='nav__logo' smooth={true} to='app'>REACT LANDING PAGE</Link>
                        <div className={`nav__list ${isShowing ? "show-list" : "hide-list"}`}>
                            <Link className='nav__link' activeClass="active" spy={true} smooth={true} offset={-80} to='features'>FEATURES</Link>
                            <Link className='nav__link' activeClass="active" spy={true} smooth={true} offset={-80} to='about-us'>ABOUT</Link>
                            <Link className='nav__link' activeClass="active" spy={true} smooth={true} offset={-80} to='services'>SERVICES</Link>
                            <Link className='nav__link' activeClass="active" spy={true} smooth={true} offset={-80} to='gallery'>GALLERY</Link>
                            <Link className='nav__link' activeClass="active" spy={true} smooth={true} offset={-80} to='testimonials'>TESTIMONIALS</Link>
                            <Link className='nav__link' activeClass="active" spy={true} smooth={true} offset={-80} to='team'>TEAM</Link>
                            <Link className='nav__link' activeClass="active" spy={true} smooth={true} offset={-80} to='contact'>CONTACT</Link>
                        </div>
                    <div className="nav__container">
                    <i className={`fas fa-${isShowing ? 'times'  : 'bars'} nav__menu`} onClick={() => ChangeShow(!isShowing)}></i>
                    </div>
                </div>
            </div>
    )
}

export default Navigation
