import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { header } from './styles';


export default class Header extends Component {
    render() {
        return (
            <nav>
                <IndexLink to="/" activeStyle={header.isActive}>Home</IndexLink>
                <Link to="/home" activeStyle={header.isActive}>App</Link>
                <Link to="/contacts" activeStyle={header.isActive}>Contacts</Link>
                <Link to="/messages" activeStyle={header.isActive}>Messages</Link>
            </nav>
        );
    }
}