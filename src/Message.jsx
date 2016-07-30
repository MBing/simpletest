import React, { Component } from 'react';
import MessagesData from './messagesData';

export default class Message extends Component {
    render() {
        let data = MessagesData.getMessage(this.props.params.uid);
        return (
            <div>
                <h1>Hello, world and you.</h1>
                <p>{ data.message }</p>
            </div>
        );
    }
}