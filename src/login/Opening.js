import React, {Component} from 'react';
import SignIn from "./SignIn";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {RESET_PASSWORD_ROUTE} from "../router/Routes";
import SignUpPrompt from "./SignUpPrompt";

class Opening extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
    }

    render() {
        return (
            <Row>
                <Col>
                    <div>This is the Opening component</div>
                    <SignIn user={this.state.user}/>
                    <Link to={RESET_PASSWORD_ROUTE}>Forgot Password?</Link>
                    <SignUpPrompt/>
                </Col>
            </Row>
        );
    }
}

export default Opening;