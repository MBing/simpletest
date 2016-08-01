import React, { Component, contextTypes, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { activeMessage, deleteMessage, showAllMessages, DELETE_MESSAGE, SHOW_ALL_MESSAGES } from './actions';

var mapStateToProps = function(state, props) {
    return {
        data: state
    };
};

class MessageNavItem extends Component {
    onMessageDelete (id) {
        this.props.dispatch(deleteMessage(id));
        // Move back to parent after deletion complete
        browserHistory.push('/messages');
    }
    render() {
        return (
            <li key={ this.props.message.uid }>
                <Link to={`/messages/${this.props.message.uid}`} activeClassName="is-active">{this.props.message.sender}</Link>
                <button onClick={ this.onMessageDelete.bind(this,this.props.message.uid) }>X</button>
            </li>
        );
    }
}
MessageNavItem = connect(mapStateToProps)(MessageNavItem);

export default MessageNavItem;