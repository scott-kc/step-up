import React, {Component} from 'react';
import './App.css';
import StepUpRouter from "./router/StepUpRouter";
import {Container} from "react-bootstrap";
import getUserServiceInstance from "./user/UserServiceFactory";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            userService: getUserServiceInstance()
        };
        if (this.state.userService === null) {
            throw Error("Illegal state! App must have a UserService");
        }
    }

    render() {
        return (
            <Container>
                <StepUpRouter userService={this.state.userService}/>
            </Container>
        );
    }
}

export default App;
