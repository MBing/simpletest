import React, { Component } from 'react';
import MessageNavItem from './MessageNavItem';
import MessagesData from './messagesData';

export default class Messages extends Component {
    render() {
        this.messages = MessagesData.getAll().map(function (message) {
            return (
                <MessageNavItem message={message} key={message.uid} />
            )
        });
        return (
            <div>
                <h1>Hello, messages and you.</h1>
                <ul>
                    {this.messages}
                </ul>
            </div>
        );
    }
}