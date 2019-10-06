import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';

function DailyCount(props) {
    return (
        <CircularProgressbar percentage={100} text={props.steps}/>
    );
}

export default DailyCount;