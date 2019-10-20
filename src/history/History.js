import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import UserHeading from "../user/UserHeading";
import StepChart from "./StepChart";
import AverageSteps from "./AverageSteps";
import PersonalRecord from "./PersonalRecord";
import Navigation from "../router/Navigation";


class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <Row>
                <Col className={"m-3 p-3"}>
                    <Row>
                        <Col>
                            <UserHeading user={this.state.user}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"p-3"}>
                            <StepChart/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} className={"w-50 p-1"}>
                            <AverageSteps steps={this.state.user.steps}/>
                        </Col>
                        <Col sm={4} className={"w-50 p-1"}>
                            <PersonalRecord steps={this.state.user.steps}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"p-3"}>
                            <Navigation/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default History;