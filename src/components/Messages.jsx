/**
 * @author Martin Bing <info@martinbing.com>
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageNavItem from './MessageNavItem';

var mapStateToProps = function(state, props) {
    return {
        messages: state.messages
    };
};

class Messages extends Component {
    render() {
        if (this.props.messages.length > 0) {
            var messages = this.props.messages.map(function (message) {
                return (
                    <MessageNavItem message={message} key={message.uid} />
                )
            });
            return (
                <div>
                    <ul>
                        {messages}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>No more messages to display</h1>
                </div>
            )
        }

    }
}
Messages = connect(mapStateToProps)(Messages);

export default Messages;
