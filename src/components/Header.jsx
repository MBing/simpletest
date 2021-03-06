/**
 * @author Martin Bing <info@martinbing.com>
 */

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { store } from '../store';
import { activeMessage } from '../actions';

/**
 * Creates a Header to use for navigation
 * @class Header
 * @extends Component
 */
class Header extends Component {
    render() {
        return (
            <nav className="main-header">
                <IndexLink to="/" activeClassName="is-active">Home</IndexLink>
                <Link to="/messages" activeClassName="is-active" onClick={handleEnter}>Messages</Link>
            </nav>
        );
    }
}

function handleEnter(nextState) {
    store.dispatch(activeMessage(null));
}
export default Header;