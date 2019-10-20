import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {Col, Row} from "react-bootstrap";

const reducer = (sum, value) => sum + value;

const isValidEntry = e => e && e.stepCount;


function averageStepEntries(steps) {
    const average = Array.isArray(steps) && steps.length > 0
        ? steps.filter(isValidEntry)
        .map(e => e.stepCount)
        .reduce(reducer, 0) / steps.length
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