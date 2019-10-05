import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {OPENING_ROUTE} from "../router/Routes";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            userService: props.userService ? props.userService : sneakyThrows(),
        };
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        //e.preventDefault();
        const updatedUser = await this.state.userService
            .signUp(this.nameInput.value, this.emailInput.value, this.passwordInput.value)
            .catch(e => {
                console.log(e);
                return null;
            });
        if (updatedUser) {
            this.setState(state => ({
                user: updatedUser
            }));
        } else {
            alert("Perhaps you should try again later...")
        }
        this.props.history.push({OPENING_ROUTE});
    }

    render() {
        return (
            <Row>
                <Col>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Enter your name"
                                          required
                                          ref={(ref) => {
                                              this.nameInput = ref
                                          }}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          placeholder="Enter email"
                                          required
                                          ref={(ref) => {
                                              this.emailInput = ref
                                          }}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else unless they're paying.
                            </Form.Text>
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
                        <Button variant="primary" href={OPENING_ROUTE} type="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

function sneakyThrows() {
    throw Error("Illegal State! SignUp must have a UserService");
}


export default SignUp;