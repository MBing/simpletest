/**
 * @author Martin Bing <info@martinbing.com>
 */

import React, { Component } from 'react';

/**
 * Creates the Home Component
 * @class Home
 * @extends Component
 */
export default class Home extends Component {
    render() {
        return (
            <section className="content">
                <h1>Welcome Home</h1>
                <p>Click on 'messages' to see the messages</p>
            </section>
        );
    }
}