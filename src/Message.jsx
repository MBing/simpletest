import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeMessage } from './actions';


const mapStateToProps = function(state, props) {
   var message = state.messages.find(msg => msg.uid === state.activeMessage);

    return {
        message: message,
        activeMessage: state.activeMessage
    };
};

class Message extends Component {
    componentWillMount() {
        if (this.props.activeMessage !== this.props.params.uid) {
            this.props.dispatch(activeMessage(this.props.params.uid));
        }
    }
    render() {
        var message = this.props.message;
        if (!message) {
            return (
                <div></div>
            )
        }

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
