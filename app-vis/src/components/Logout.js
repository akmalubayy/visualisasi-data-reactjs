import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>You have been logged out</h1>
                <Link to="/">Login Again Please!</Link>
            </div>
        );
    }
}

export default Logout;