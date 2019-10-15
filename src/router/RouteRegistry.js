import React, {Component} from 'react';
import {
    HISTORY_ROUTE,
    HOME_ROUTE,
    OPENING_ROUTE,
    RESET_PASSWORD_ROUTE,
    SETTINGS_ROUTE,
    SIGN_IN_ROUTE,
    SIGN_UP_ROUTE
} from "./Routes";
import Opening from "../login/Opening";
import SignUp from "../login/SignUp";
import SignIn from "../login/SignIn";
import ResetPassword from "../login/ResetPassword";
import Home from "../home/Home";
import History from "../history/History";
import Settings from "../settings/Settings";

function initRegistry(user, userService, ...props) {
    let registryMap = new Map();
    registryMap.set(OPENING_ROUTE, <Opening {...props}/>);
    registryMap.set(SIGN_UP_ROUTE, <SignUp {...props} userService={userService}/>);
    registryMap.set(SIGN_IN_ROUTE, <SignIn {...props} userService={userService}/>);
    registryMap.set(RESET_PASSWORD_ROUTE, <ResetPassword {...props}/>);
    registryMap.set(HOME_ROUTE, <Home {...props} />);
    registryMap.set(HISTORY_ROUTE, <History {...props}/>);
    registryMap.set(SETTINGS_ROUTE, <Settings {...props} user={user} userService={userService}/>);
    return registryMap;
}

class RouteRegistry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            routeKey: props.currentRoute ? props.currentRoute : OPENING_ROUTE,
            registry: initRegistry(props.user, props.userService)
        };
        this.renderCurrentRoute = this.renderCurrentRoute.bind(this);
    }

    renderCurrentRoute() {
        return this.state.registry.get(this.state.currentRoute);
    }

    render() {
        return (
            <div>{this.renderCurrentRoute()}</div>
        );
    }
}

export default RouteRegistry;