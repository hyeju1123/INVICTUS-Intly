import React from 'react'
import './AboutPage.css';

import Bubble from '../images/Bubble.svg';
import About_Bubble from '../images/About_bubble.svg'
import CharacterHugs from '../images/CharacterHugs.png';


function AboutPage() {
    console.log(window.innerHeight)

    return (
        <>
        <div className='aboutBackground'>
            <img className='bubbleImage' alt='aboutBubble' src={Bubble} />
            <div className='hugsContainer'>
                <img className='hugs' alt='hugs' src={CharacterHugs} />
            </div>
        </div>
        <div className='background2'>
            <div className='bottomTitle'>
                So we came up with a solution - Int'ly.
            </div>
            <div className='bottomContent'>
                <p className='bottomContentText'>We created Int'ly so ALL international students can</p>
                <p className='bottomContentText'>connect with each other, share, and learn. We made it so</p>
                <p className='bottomContentText'>you can easliy ask questions, access information, and</p>
                <p className='bottomContentText'>connect with other students anonymously.</p>
            </div>
        </div>
        </>
    )
}

export default AboutPage
