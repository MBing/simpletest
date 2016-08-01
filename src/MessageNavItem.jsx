import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { activeMessage, deleteMessage, showAllMessages, DELETE_MESSAGE, SHOW_ALL_MESSAGES } from './actions';
import header from './styles';

var mapStateToProps = function(state, props) {
    return {
        data: state
    };
};

// function mapDispatchToProps(dispatch) {
//     console.log('bezig met dispatch');
//     return {
//         onMessageDelete: (id) => dispatch(deleteMessage(id))
//     };
// }

class MessageNavItem extends Component {
    constructor (props) {
        super(props);
        // console.log('++++++++++++++++++++', props.message);
        this.message = props.message;
    }
    // onMessageDelete = (id) => {
    //     this.props.dispatch(deleteMessage(id));
    //     console.log(this.props);
    // };

    render() {
        return (
            <li key={ this.message.uid }>
                <Link to={`/messages/${this.message.uid}`} activeStyle={ header.isActive }>{this.message.sender}</Link>
                {/*<Link to={`/messages/delete/${this.message.uid}`}> X </Link>*/}
                {/*<button onClick={ this.deleteMessage.bind(this.message.uid) }>X</button>*/}
                {/*<button onClick={ this.props.dispatch(deleteMessage(this.message.uid)) }>X</button>*/}
            </li>
        );
    }
}

MessageNavItem = connect(mapStateToProps)(MessageNavItem);

export default MessageNavItem;