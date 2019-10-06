import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {OPENING_ROUTE} from "../router/Routes";
import Goal from "./Goal";

class UserHeading extends Component {
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
                        <Col>
                            <Row>
                                <Col>
                                   {this.getName()}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Goal user={this.state.user}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col className={"w-25"}>
                            <Button href={OPENING_ROUTE}>Sign Out</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default UserHeading;