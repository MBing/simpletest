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
        var messages = this.props.messages.map(function (message) {
            return (
                <MessageNavItem message={message} key={message.uid} />
            )
        });
        console.log(messages);
        return (
            <div>
                <ul>
                    {messages}
                </ul>
            </div>
        );
    }
}
Messages = connect(mapStateToProps)(Messages);

export default Messages;
