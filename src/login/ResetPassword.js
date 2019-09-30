import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {OPENING_ROUTE} from "../router/Routes";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            userService: props.userService
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        const form = event.currentTarget;
        const updatedUser = await this.userService.resetPassword(form.formBasicEmail, form.formBasicPassword);
        this.setState(state => ({
            user: updatedUser
        }));
    }

    render() {
        return (
            <Row>
                <Col>
                    <div>This is the reset password page</div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else unless they're paying.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Button variant="primary" href={OPENING_ROUTE} type="submit">
                            Reset Password
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default ResetPassword;