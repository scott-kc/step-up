import {BrowserRouter, Route} from "react-router-dom";
import React, {Component} from 'react';
import * as routes from "./Routes";
import Opening from "../login/Opening";
import Home from "../home/Home";
import History from "../history/History";
import {Col, Row} from "react-bootstrap";
import ResetPassword from "../login/ResetPassword";
import SignUp from "../login/SignUp";
import SignIn from "../login/SignIn";
import Settings from "../settings/Settings";

class StepUpRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            userService: props.userService ? props.userService : sneakyThrows()
        };
    }

    render() {
        return (
            <Row>
                <Col>
                    <BrowserRouter>
                        <Route exact path={routes.OPENING_ROUTE} render={(props) => <Opening {...props} />}/>
                        <Route path={routes.SIGN_UP_ROUTE}
                               render={(props) => <SignUp {...props} userService={this.state.userService}/>}/>
                        <Route path={routes.SIGN_IN_ROUTE}
                               render={(props) => <SignIn {...props} userService={this.state.userService}/>}/>
                        <Route path={routes.RESET_PASSWORD_ROUTE} render={(props) => <ResetPassword {...props} />}/>
                        <Route path={routes.HOME_ROUTE}
                               render={(props) => <Home {...props} />}/>
                        <Route path={routes.HISTORY_ROUTE} render={(props) => <History {...props} />}/>
                        <Route path={routes.SETTINGS_ROUTE}
                               render={(props) => <Settings {...props} user={this.state.user}
                                                            userService={this.state.userService}/>}/>
                    </BrowserRouter>
                </Col>
            </Row>
        );
    }
}

function sneakyThrows() {
    throw Error("Illegal State! StepUpRouter must have a UserService");
}

export default StepUpRouter;