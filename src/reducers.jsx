import React from 'react';
import MessagesData from './messagesData';
// import { combineReducers } from 'redux';
import { ACTIVE_MESSAGE, DELETE_MESSAGE, SHOW_ALL_MESSAGES } from './actions';

const initialMessagesState = {
    messages: MessagesData.getAll(),
    message: MessagesData.getMessageByIndex(0)
};

var messageListReducer = function(state = initialMessagesState, action) {
    var msg = state.messages.filter((msg) => msg.uid === action.id);
    var msgs = state.messages.filter((msg) => msg.uid !== action.id);
    console.log('messages', msgs);
    switch (action.type) {
        case SHOW_ALL_MESSAGES:
            return  Object.assign({}, state, {
                messages: state.messages
            });
        case ACTIVE_MESSAGE:
            console.log('active msg id', action.id);
            console.log('active msg state', msg[0]);
            // action.id beschikbaar om bericht op te halen
            // console.log('state op messages voor active msg', state.message);
            return  Object.assign({}, state, {
                message: msg[0],
                id: action.id
            });
        case DELETE_MESSAGE:
            // MessagesData.deleteMessage(action.id);
            // state.messages
            console.log('vanuit action ', action.id);
            console.log('vanuit action de state ', state.messages);
            // console.log('vanuit action get all', MessagesData.getAll());
            // console.log(state.messages.filter((msg) => msg.uid !== action.id));
            return  Object.assign({}, state, {
                messages: msgs,
                message: state.messages,
                id: action.id
            });
        default:
            return state
    }
};
//
// const reducers = combineReducers({
//         messageListReducer,
//         messageReducer
//     });
//
// export default reducers;
export default messageListReducer;
