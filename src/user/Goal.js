import React, {Component} from 'react';
import {Col, Overlay, Popover, PopoverContent, PopoverTitle, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SETTINGS_ROUTE} from "../router/Routes";
import {DEFAULT_GOAL} from "./User";

// TODO add popover to users without goals
const popover = (
    <Popover id="popover-basic">
        <PopoverTitle as="h3">Let's set some goals!</PopoverTitle>
        <PopoverContent>
            Looks like you don't have a daily step goal defined. Let's change that by going to <Link
            to={SETTINGS_ROUTE}>settings</Link>.
        </PopoverContent>
    </Popover>
);

class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            goal: null
        };
        this.getGoal = this.getGoal.bind(this);
    }

    // always returns a valid goal
    getGoal() {
        return isValidGoal(this.goal) ? this.goal : DEFAULT_GOAL;
    }


    render() {
        return (
            <Row className={""}>
                <Col className={""}>
                    <div>
                        Goal: {this.getGoal()}
                    </div>
                    <Overlay>
                    </Overlay>
                </Col>
            </Row>
        );
    }
}

function isValidGoal(goal) {
    return goal && Number.isInteger(goal);
}


export default Goal;