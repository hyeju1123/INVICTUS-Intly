import React, { useState } from 'react'
import './BottomSide.css';

function BottomSide() {

    const [topicToggle, setTopicToggle] = useState(false);
    const [fieldsToggle, setFieldsToggle] = useState(false);
    const [eventsToggle, setEventsToggle] = useState(false);

    return (
        <div className='bottomBar'>
            <div className='bottomBox'>
                <div 
                    onMouseEnter={() => setTopicToggle(true)}
                    onMouseLeave={() => setTopicToggle(false)}
                >
                    <p className='navBottomText'>Free Topic</p>
                        {
                            topicToggle &&
                            (
                                <div className='toggleBox'>
                                    <div className='toggleText'>
                                        Free Thread
                                    </div>
                                    <div className='toggleText'>
                                        Worries & Hugs
                                    </div>
                                </div>
                                
                            )
                        }
                </div>
                <div
                    onMouseEnter={() => {setFieldsToggle(true)}}
                    onMouseLeave={() => {setFieldsToggle(false)}}
                >
                    <p className='navBottomText'>Fields</p>
                        {
                            fieldsToggle &&
                            (
                                <div className='toggleBox'>
                                    <div className='toggleText'>
                                        Tech
                                    </div>
                                    <div className='toggleText'>
                                        Business
                                    </div>
                                    <div className='toggleText'>
                                        Law
                                    </div>
                                    <div className='toggleText'>
                                        Med/Health
                                    </div>
                                </div>
                                
                            )
                        }
                </div>
                <div
                    onMouseEnter={() => setEventsToggle(true)}
                    onMouseLeave={() => setEventsToggle(false)}
                >
                    <p className='navBottomText'>Events</p>
                        {
                            eventsToggle &&
                            (
                                <div className='toggleBox'>
                                    <div className='toggleText'>
                                        Browse Events
                                    </div>
                                    <div className='toggleText'>
                                        Manage RSVP 
                                    </div>
                                </div>
                                
                            )
                        }
                </div>
                <div>
                    <p className='yourCampusText'>Your Campus</p>
                </div>
            </div>
        </div>
    )
}

export default BottomSide
