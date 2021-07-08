import React from 'react'
import './Footer.css';
import Instagram from '../images/Instagram.svg';

function footer() {
    return (
        <div className='footerContainer'>
            <div className='footerTopBox'>
                <div className='footerTopText'>Follow us on</div>
                <img className='instagramIcon' alt='instagram' src={Instagram} />
                <div className='footerTopText'>Subscribe to newsletter</div>
            </div>
            <div className='footerBottomBox'>
                © 2021 Int'ly. All rights reserved
            </div>            
        </div>
    )
}

export default footer
