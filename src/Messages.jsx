import React, { Component } from 'react';
import { Link } from 'react-router';
import header from './styles';
import MessagesData from './messagesData';

export default class Messages extends Component {
    render() {
        this.messages = MessagesData.getAll().map(function (message) {
            return (
                <li key={ message.uid }>
                    <Link to={`/messages/${message.uid}`} activeStyle={ header.isActive }>{message.sender}</Link>
                    <Link to={`/messages/delete/${message.uid}`}> X </Link>
                    {/*<button onClick={ deleteMessage(message.uid) }>X</button>*/}
                </li>
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