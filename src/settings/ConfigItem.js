import React from 'react';
import {Col, Row} from "react-bootstrap";

export default function ConfigItem(props) {
    return (
        <Row>
            <Col>
                <form onSubmit={props.handleSubmit}>
                    <Row>
                        <Col>
                            <label>
                                {props.label}:
                                <input type="text" value={props.value} onChange={props.handleChange}/>
                            </label>
                        </Col>
                        <Col>
                            <input type="submit" value="Update"/>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    );
}