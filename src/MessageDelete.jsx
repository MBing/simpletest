import React, { Component } from 'react';
import MessagesData from './messagesData';

export default class MessageDelete extends Component {

    render() {
        MessagesData.deleteMessage(this.props.params.uid);
        console.log(MessagesData.getAll());
        return (
            <div>
                <h1>Message deleted!</h1>
            </div>
        );
    }
}