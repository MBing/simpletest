import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { activeMessage, deleteMessage, showAllMessages, DELETE_MESSAGE, SHOW_ALL_MESSAGES } from './actions';
import header from './styles';

var mapStateToProps = function(state, props) {
    return {
        data: state
    };
};

class MessageNavItem extends Component {
    onMessageDelete (id) {
        this.props.dispatch(deleteMessage(id));
    }
    render() {
        return (
            <li key={ this.props.message.uid }>
                <Link to={`/messages/${this.props.message.uid}`} activeStyle={ header.isActive }>{this.props.message.sender}</Link>
                <button onClick={ this.onMessageDelete.bind(this,this.props.message.uid) }>X</button>
            </li>
        );
    }
}

MessageNavItem = connect(mapStateToProps)(MessageNavItem);

export default MessageNavItem;