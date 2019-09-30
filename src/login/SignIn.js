import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {HOME_ROUTE} from "../router/Routes";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.user = props.user;
    }

    render() {
        return (
            <Row>
                <Col>
                    <Row>
                        <Col>This is the sign in component</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button href={HOME_ROUTE}>Sign In</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default SignIn;