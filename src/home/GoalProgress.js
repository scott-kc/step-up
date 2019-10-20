import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {DEFAULT_GOAL} from "../user/User";

function enrichProps(props) {
    const steps = props.steps ? props.steps : 0;
    const goal = props.goal ? props.goal : DEFAULT_GOAL;
    return {
        steps: steps,
        goal: goal,
        ratio: steps / goal,
        stepsToGoal: goal - steps
    };
}

function GoalProgress(props) {
    const p = enrichProps(props);
    return (
        <CircularProgressbar percentage={p.ratio} text={p.stepsToGoal}
                             circleRatio={p.ratio} value={p.goal}/>
    );
}

export default GoalProgress;