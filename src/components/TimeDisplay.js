import React from 'react';

const TimerDisplay = (props) => (

    <div className = 'timer-display'>
        {props.min < 10 ? `0${props.min}`:props.min}:{props.sec< 10 ? `0${props.sec}`:props.sec}
    </div>
    
)

export default TimerDisplay;