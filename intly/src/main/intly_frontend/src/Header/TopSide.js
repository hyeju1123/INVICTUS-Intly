import React from 'react'
import './TopSide.css';
import Logo from '../images/Logo.png';
import search from '../images/search.svg';

function TopSide() {
    return (
        <div className='topBarContainer'>
            <img className='searchIcon' alt='searchIcon' src={search} />
            <img className='mainLogo' alt='mainLogo' src={Logo} />
            <div>
            <input className='searchInput' type='text' />
            <img className='search' alt='search' src={search} />
            </div>
            <div className='rightBarContainer'>
                <div className='rightButtonText'>About</div>
                <div className='rightButtonText'>Support</div>
                <div className='signInText'>Sign in</div>
                <div className='signUpButton'>Sign up</div>
            </div>
        </div>
    )
}

export default TopSide
