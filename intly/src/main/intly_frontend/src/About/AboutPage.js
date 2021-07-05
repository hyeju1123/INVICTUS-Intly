import React from 'react'
import './AboutPage.css';

import useWindowSize from '../hook/useWindowSIze';

function AboutPage() {

    const size = useWindowSize();
    console.log(size.width)

    return (
        <div className='backgroundImg1' style={{ width: size.width - 30, height: size.height }} />
    )
}

export default AboutPage
