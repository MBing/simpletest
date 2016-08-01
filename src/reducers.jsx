import React from 'react';
import MessagesData from './messagesData';
// import { combineReducers } from 'redux';
import { ACTIVE_MESSAGE, DELETE_MESSAGE, SHOW_ALL_MESSAGES } from './actions';

const initialMessagesState = {
    messages: MessagesData.getAll(),
    message: MessagesData.getMessageByIndex(0)
};

var messageListReducer = function(state = initialMessagesState, action) {
    var msgs = state.messages.filter((msg) => msg.uid !== action.id);
    var msg = state.messages.filter((msg) => msg.uid === action.id);
    msg = msg[0];
    switch (action.type) {
        case SHOW_ALL_MESSAGES:
            return  Object.assign({}, state, {
                messages: state.messages
            });
        case ACTIVE_MESSAGE:
            return  Object.assign({}, state, {
                message: msg,
                id: action.id
            });
        case DELETE_MESSAGE:
            return  Object.assign({}, state, {
                messages: msgs,
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
