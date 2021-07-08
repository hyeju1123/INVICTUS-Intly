import React from 'react'
import './Home.css'
import Landing from '../images/Landing.svg';
import HomeBottom from './HomeBottom';

function Home() {
    return (
        <>
        <div className='mainPageContainer'>
            <img className='mainPageImage' alt='mainPageImage' src={Landing} />
        </div>
        <div className='mainTextBox'>
            <p className='text1'>Share,<br/>learn,<br/>connect.</p>
            <div style={{ marginTop: '1vw' }}></div>
            <p className='text2'>Bringing all,<br/>internationals<br/>together</p>
            <div style={{ marginTop: '1vw' }}></div>
            <p className='text3'>
                Join a community of international<br/>
                students without having to<br/>
                explain who you are.
            </p>
            <div className='buttonBox'>
                <div className='mainLeftButton'>Sign up</div>
                <div className='mainRightButton'>About</div>
            </div>
        </div>
        <HomeBottom />
        </>
    )
}

export default Home
