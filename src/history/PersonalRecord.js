import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {stepEntryUsing} from "../user/StepEntry";
import {Col, Row} from "react-bootstrap";

const reducer = (x, y) => x > y ? x : y;

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

function calulatePr(steps) {
    let stepEntries = mockStepEntries;//TODO use user.steps;
    const average = Array.isArray(stepEntries) && stepEntries.length > 0
        ? stepEntries.filter(isValidEntry)
            .map(e => e.stepCount)
            .reduce(reducer, 0)
        : 0;
    console.log(average);
    return average.toPrecision(4);
}

function PersonalRecord(props) {
    const pr = calulatePr(props.steps);
    return (
        <Row>
            <Col>
                <Row>
                    <Col className="offset-1 p-2">
                        Personal Record
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CircularProgressbar text={pr}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default PersonalRecord;