import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import Navigation from "../router/Navigation";
import 'react-circular-progressbar/dist/styles.css';
import DailyCount from "./DailyCount";
import GoalProgress from "./GoalProgress";
import UserHeading from "../user/UserHeading";

// TODO extract these from user
const mockGoal = 7000;
const mockSteps = 5251;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
        this.getName = this.getName.bind(this);
    }

    getName() {
        return this.state && this.state.name ? this.state.name : "Scott";
    }

    render() {
        return (
            <Row>
                <Col className={"m-3"}>
                    <Row>
                        <Col className={"p-3"}>
                            <UserHeading user={this.state.user}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} className={"w-50 p-3"}>
                            <GoalProgress goal={mockGoal} steps={mockSteps}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} className={"w-75 p-3 span-4 offset-4"}>
                            <DailyCount steps={mockSteps}/>
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

export default Home;