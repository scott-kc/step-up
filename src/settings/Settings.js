import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {DEFAULT_GOAL, userFrom} from "../user/User";
import Navigation from "../router/Navigation";
import ConfigItem from "./ConfigItem";

const GOAL_LABEL = "Daily Step Goal";

const DATA_RETENTION_LABEL = "Data retention";

const DEFAULT_DATA_RENTENTION_IN_DAYS = 7;

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: props.user && props.user.goal ? props.user.goal : DEFAULT_GOAL,
            dataRetention: props.user && props.user.dataRetention ? props.user.dataRetention : DEFAULT_DATA_RENTENTION_IN_DAYS,
            user: props.user,
            userService: props.userService
        };

        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.handleGoalSubmit = this.handleGoalSubmit.bind(this);
        this.handleRetentionChange = this.handleRetentionChange.bind(this);
        this.handleRetentionSubmit = this.handleRetentionSubmit.bind(this);
    }

    handleGoalChange(event) {
        this.setState({goal: event.target.value});
    }

    handleGoalSubmit(event) {
        alert('A name was submitted: ' + this.state.goal);
        let updatedUser = userFrom(this.state.user);
        updatedUser.goal = this.state.goal;
        this.userService.save(updatedUser);
        event.preventDefault();
    }

    handleRetentionChange(event) {
        this.setState({dataRetention: event.target.value});
    }

    handleRetentionSubmit(event) {
        alert('A name was submitted: ' + this.state.goal);
        let updatedUser = userFrom(this.state.user);
        updatedUser.dataRetention = this.state.dataRetention;
        this.userService.save(updatedUser);
        event.preventDefault();
    }

    render() {
        return (
            <Row>
                <Col>
                    <ConfigItem label={GOAL_LABEL} value={this.state.goal} handleSubmit={this.handleGoalSubmit}
                                onChange={this.handleGoalChange}/>
                    <ConfigItem label={DATA_RETENTION_LABEL} value={this.state.dataRetention + " days"}
                                handleSubmit={this.handleRetentionSubmit}
                                onChange={this.handleRetentionChange}/>
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

export default Settings;