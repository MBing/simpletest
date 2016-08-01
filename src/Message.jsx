import React, { Component } from 'react';
import { connect } from 'react-redux';

var mapStateToProps = function(state, props) {
    return {
        data: state
    };
};

class Message extends Component {
    constructor(props) {
        super(props);
        console.log(props.data.message);
        this.message = props.data.message.message;
        // this.message = 'test';
    }
    render() {
        return (
            <div>
                <h1>Hello, world and you.</h1>
                <p>{ this.message }</p>
            </div>
        );
    }
}


Message = connect(mapStateToProps)(Message);
export default Message;