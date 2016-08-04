import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';
import classNames from 'classnames';
import { store } from '../store';

let mapStateToProps = function(state) {
    return {
        activeMessage: state.activeMessage
    };
};

class MessageNavItem extends Component {

    onRead (id) {
        // Server API: The 'unread' state would be changed by activeMessage init action dispatch
        this.props.message.unread = false
    }

    render() {
        if (store.getState().activeMessage === this.props.message.uid)
            this.props.message.unread = false;

        let listClass = classNames({
            'list-item': true,
            'unread': this.props.message.unread
        });
        return (
            <li className={listClass} onClick={this.onRead.bind(this, this.props.message.uid)} key={ this.props.message.uid }>
                <Link to={`/messages/${this.props.message.uid}`} activeClassName="is-active"><strong>{this.props.message.subject}</strong> | <em>{this.props.message.sender}</em></Link>
                <p><small>{moment(this.props.message.time_sent).format('ddd DD MMMM, HH:mm ')}</small></p>
            </li>
        );
    }
}
MessageNavItem = connect(mapStateToProps)(MessageNavItem);

export default MessageNavItem;
