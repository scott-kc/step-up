import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {Col, Row} from "react-bootstrap";

const reducer = (x, y) => x > y ? x : y;

const isValidEntry = e => e && e.stepCount;


function calulatePr(steps) {
    const average = Array.isArray(steps) && steps.length > 0
        ? steps.filter(isValidEntry)
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