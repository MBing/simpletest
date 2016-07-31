import React, { Component } from 'react';
import { Link } from 'react-router';
import header from './styles';
import MessageNavItem from './MessageNavItem';
import MessagesData from './messagesData';

export default class Messages extends Component {
    // getInitialState () {
    //     return { messageData: this.props.initialData };
    // }
    // deleteMessage (id) {
    //     MessagesData.deleteMessage(id);
    //     this.setState({ messageData: MessagesData.getAll() });
    // }
    render() {
        this.messages = messageData.map(function (message) {
            return (
                <MessageNavItem message={message} />
                {/*<li key={ message.uid }>*/}
                    {/*<Link to={`/messages/${message.uid}`} activeStyle={ header.isActive }>{message.sender}</Link>*/}
                    {/*/!*<Link to={`/messages/delete/${message.uid}`}> X </Link>*!/*/}
                    {/*<button onClick={ this.deleteMessage.bind(message.uid) }>X</button>*/}
                {/*</li>*/}
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