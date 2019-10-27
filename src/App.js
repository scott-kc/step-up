import React, {Component} from 'react';
import './App.css';
import StepUpRouter from "./router/StepUpRouter";
import {Container} from "react-bootstrap";
import getUserServiceInstance from "./user/UserServiceFactory";
import {stepEntry} from "./user/StepEntry";
import {incrementUserStepCount} from "./pedometer/Pedometer";

const DEVICE_STEP_EVENT_TYPE = 'deviceorientation';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {steps: [stepEntry()]},
            userService: getUserServiceInstance()
        };
        if (this.state.userService === null) {
            throw Error("Illegal state! App must have a UserService");
        }
        this.registerStep = this.registerStep.bind(this);
        window.addEventListener(DEVICE_STEP_EVENT_TYPE,
            event => this.registerStep(event));
    }

    registerStep(event) {
        console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
        this.setState({
            user: incrementUserStepCount(this.state.user)
        });
    }

    render() {
        return (
            <Container>
                <StepUpRouter userService={this.state.userService} user={this.state.user}/>
            </Container>
        );
    }
}

export default App;
