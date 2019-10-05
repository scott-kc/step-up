import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {OPENING_ROUTE} from "../router/Routes";

class Home extends Component {
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
                    <div>This is the home page</div>
                    <Button href={OPENING_ROUTE}>Sign Out</Button>
                </Col>
            </Row>
        );
    }
}

export default Home;