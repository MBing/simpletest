import React, { Component } from 'react';

export default class Message extends Component {
    constructor (props) {
        console.log(props.message);
    }
    deleteMessage (id) {
        MessagesData.deleteMessage(id);
        // this.setState({ messageData: MessagesData.getAll() });
    }
    render() {
        // let data = MessagesData.getMessage(this.props.params.uid);
        return (
            <li key={ message.uid }>
                <Link to={`/messages/${message.uid}`} activeStyle={ header.isActive }>{message.sender}</Link>
                {/*<Link to={`/messages/delete/${message.uid}`}> X </Link>*/}
                <button onClick={ this.deleteMessage.bind(message.uid) }>X</button>
            </li>
        );
    }
}