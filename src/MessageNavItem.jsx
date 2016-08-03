import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { deleteMessage } from './actions';

var mapStateToProps = function(state) {
    return {
        activeMessage: state.activeMessage
    };
};

class MessageNavItem extends Component {
    onMessageDelete (id) {
        this.props.dispatch(deleteMessage(id));
        // Only redirect state if current was deleted
        if (id === this.props.activeMessage) browserHistory.push('/messages');
    }

    render() {
        return (
            <li key={ this.props.message.uid }>
                <Link to={`/messages/${this.props.message.uid}`} activeClassName="is-active"><strong>{this.props.message.subject}</strong> <small>from</small> <em>{this.props.message.sender}</em></Link>
                <button bsStyle="primary" onClick={ this.onMessageDelete.bind(this,this.props.message.uid) }>X</button>
            </li>
        );
    }
}
MessageNavItem = connect(mapStateToProps)(MessageNavItem);

export default MessageNavItem;
