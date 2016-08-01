import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeMessage, deleteMessage, showAllMessages, DELETE_MESSAGE, SHOW_ALL_MESSAGES } from './actions';

const mapStateToProps = function(state, props) {
    return {
        data: state
    };
};

class Message extends Component {
    componentWillMount() {
        if (this.props.data.id !== this.props.params.uid) {
            this.props.dispatch(activeMessage(this.props.params.uid));
        }
    }
    render() {
        var message = this.props.data.message || this.props.data.messages[0];
        return (
            <div>
                <h1>Hello, {message.sender}!</h1>
                <p>{ message.message }</p>
            </div>
        );
    }
}

Message = connect(mapStateToProps)(Message);
export default Message;