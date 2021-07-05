import React, { useState } from 'react'
import Logo from '../images/Logo.png';
import './NavBar.css';

function NavBar() {

    const [search, setSearch] = useState('');

    const onSearchHandler = e => {
        setSearch(e.currentTarget.value);
    }

    return (
        <div>
            <div className='topBar'>
                <img className='mainLogo' alt='logo' src={Logo} />
                <input className='searchInput' type='text' value={search} onChange={onSearchHandler} />
                <div className='navRight'>
                    <div>
                        <p className='navRightText'>About</p>
                    </div>
                    <div>
                        <p className='navRightText'>Support</p>
                    </div>
                    <div>
                        <p className='navRightText'>Sign in</p>
                    </div>
                    <div className='signUpButton'>
                        <p className='navRightText'>Sign up</p>
                    </div>
                </div>
            </div>
            <div className='bottomBar'>
                <div className='bottomBox'>
                    <div>
                        <p className='navBottomText'>Free Topic</p>
                    </div>
                    <div>
                        <p className='navBottomText'>Fields</p>
                    </div>
                    <div>
                        <p className='navBottomText'>Events</p>
                    </div>
                    <div>
                        <p className='yourCampusText'>Your Campus</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
