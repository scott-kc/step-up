import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {HOME_ROUTE, OPENING_ROUTE} from "../router/Routes";
import {Redirect} from "react-router";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            redirect: false
        };
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    async handleSubmit(e) {
        e.preventDefault();
        const updatedUser = await this.state.userService
            .signIn(this.emailInput.value, this.passwordInput.value)
            .catch(e => {
                console.log(e);
                return null;
            });
        this.setState(state => ({
            user: updatedUser,
            redirect: true
        }));
        this.props.history.push(HOME_ROUTE);
    }

    render() {
        return (
            <Row>
                <Col>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          placeholder="Enter email"
                                          required
                                          ref={(ref) => {
                                              this.emailInput = ref
                                          }}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          placeholder="Password"
                                          required
                                          ref={(ref) => {
                                              this.passwordInput = ref
                                          }}/>
                        </Form.Group>
                        <Button variant="primary" href={HOME_ROUTE} type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default SignIn;