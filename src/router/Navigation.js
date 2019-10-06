import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChartBar, faCog, faHome} from '@fortawesome/free-solid-svg-icons'
import {HISTORY_ROUTE, HOME_ROUTE} from "./Routes";

function Navigation() {
    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <Button href={HOME_ROUTE} variant="light">
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faHome}/>
                                </Col>
                                <Col>
                                    Home
                                </Col>
                            </Row>
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col>
                        <Button href={HISTORY_ROUTE} variant="light">
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faChartBar}/>
                                </Col>
                                <Col>
                                    History
                                </Col>
                            </Row>
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col>
                        <Button href={"/"} variant="light">
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faCog}/>
                                </Col>
                                <Col>
                                    Settings
                                </Col>
                            </Row>
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Navigation;