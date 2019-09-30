import React, {Component} from 'react';

class History extends Component {
    constructor(props) {
        super(props);
        this.user = props.user;
    }

    render() {
        return <div>This is the History page</div>;
    }
}

export default History;