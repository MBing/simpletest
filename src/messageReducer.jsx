import React from 'react';
import messages from './api/messagesData';
import { ACTIVE_MESSAGE, DELETE_MESSAGE, READ_MESSAGE } from './actions';

const initialMessagesState = {
    messages: messages,
    readMessages: [],
    activeMessage: null
};

var messageReducer = function(state = initialMessagesState, action) {
    switch (action.type) {
        case ACTIVE_MESSAGE:
            return  Object.assign({}, state, {
                activeMessage: action.id,
            });
        case DELETE_MESSAGE:
            return  Object.assign({}, state, {
                messages: state.messages.filter((msg) => msg.uid !== action.id)
            });
        case READ_MESSAGE:
            console.log('id action', action.id);
            return state.readMessages.concat(action.id);
        default:
            return state
    }
};

export default messageReducer;
