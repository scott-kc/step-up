import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SIGN_UP_ROUTE} from "../router/Routes";

function SignUpPrompt() {
    return (
        <Row>
            <Col>
                <div>Don't have an account?</div>
                <Link to={SIGN_UP_ROUTE}>Sign Up</Link>
            </Col>
        </Row>
    );
}

export default SignUpPrompt;