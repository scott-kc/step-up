import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {stepEntryUsing} from "../user/StepEntry";
import {Col, Row} from "react-bootstrap";

const reducer = (sum, value) => sum + value;

const isValidEntry = e => e && e.stepCount;

// TODO delete this
const mockStepEntries = [
    stepEntryUsing(dateMinusDays(6), 4828),
    stepEntryUsing(dateMinusDays(5), 2237),
    stepEntryUsing(dateMinusDays(4), 5712),
    stepEntryUsing(dateMinusDays(3), 6493),
    stepEntryUsing(dateMinusDays(2), 6376),
    stepEntryUsing(dateMinusDays(1), 7210),
    stepEntryUsing(dateMinusDays(0), 6019)
];

// TODO delete this
function dateMinusDays(days) {
    let date = new Date();
    let day = date.getDate();
    date.setDate(day - days);
    return date;
}

function averageStepEntries(steps) {
    let stepEntries = mockStepEntries;//TODO use user.steps;
    const average = Array.isArray(stepEntries) && stepEntries.length > 0
        ? stepEntries.filter(isValidEntry)
        .map(e => e.stepCount)
        .reduce(reducer, 0) / stepEntries.length
        : 0;
    console.log(average);
    return average.toPrecision(4);
}

function AverageSteps(props) {
    const average = averageStepEntries(props.steps);
    return (
        <Row>
            <Col>
                <Row>
                    <Col className="offset-2 p-2">
                        Average Steps
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CircularProgressbar text={average}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default AverageSteps;