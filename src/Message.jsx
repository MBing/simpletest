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
        // check if the message is still available
        if (this.props.data.id !== this.props.params.uid) {
            this.props.dispatch(activeMessage(this.props.params.uid));
        }
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.data.message.sender}!</h1>
                <p>{ this.props.data.message.message }</p>
            </div>
        );
    }
}

Message = connect(mapStateToProps)(Message);
export default Message;