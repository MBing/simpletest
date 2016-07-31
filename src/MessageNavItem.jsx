import React, { Component } from 'react';
import { Link } from 'react-router';
import header from './styles';
import MessagesData from './messagesData';

export default class Message extends Component {
    constructor (props) {
        super(props);
        // console.log(props.message);
        this.message = props.message;
    }
    deleteMessage (id) {
        MessagesData.deleteMessage(id);
        // this.setState({ messageData: MessagesData.getAll() });
    }
    render() {
        // let data = MessagesData.getMessage(this.props.params.uid);
        return (
            <li key={ this.message.uid }>
                <Link to={`/messages/${this.message.uid}`} activeStyle={ header.isActive }>{this.message.sender}</Link>
                {/*<Link to={`/messages/delete/${message.uid}`}> X </Link>*/}
                <button onClick={ this.deleteMessage.bind(this.message.uid) }>X</button>
            </li>
        );
    }
}