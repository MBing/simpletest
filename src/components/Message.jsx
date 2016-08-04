/**
 * @author Martin Bing <info@martinbing.com>
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeMessage } from '../actions';
import { browserHistory } from 'react-router';
import { deleteMessage } from '../actions';

const mapStateToProps = function(state, props) {
   var message = state.messages.find(msg => msg.uid === state.activeMessage);

    return {
        message: message,
        activeMessage: state.activeMessage
    };
};

/**
 * Creates a Message
 * @class Message
 * @extends Component
 */
class Message extends Component {
    /**
     *
     */
    componentWillMount() {
        if (this.props.activeMessage !== this.props.params.uid) {
            this.props.dispatch(activeMessage(this.props.params.uid));
        }
    }

    /**
     *
     * @param id
     */
    onMessageDelete (id) {
        this.props.dispatch(deleteMessage(id));
        // Only redirect state if current was deleted
        if (id === this.props.activeMessage) browserHistory.push('/messages');
    }

    /**
     *
     * @returns {JSX}
     */
    render() {
        var message = this.props.message;
        if (!message) {
            return (
                <div></div>
            )
        }

        return (
            <div className="message-item">
                <button className="btn-close" onClick={ this.onMessageDelete.bind(this, message.uid) }>X</button>
                <h1>Hello, {message.sender}!</h1>
                <p>{ message.message }</p>
            </div>
        );
    }
}

Message = connect(mapStateToProps)(Message);
export default Message;
