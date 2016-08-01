import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';


export default class Header extends Component {
    render() {
        return (
            <nav>
                <IndexLink to="/" activeClassName="is-active">Home</IndexLink>
                <Link to="/home" activeClassName="is-active">App</Link>
                <Link to="/contacts" activeClassName="is-active">Contacts</Link>
                <Link to="/messages" activeClassName="is-active">Messages</Link>
            </nav>
        );
    }
}