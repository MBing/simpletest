import React from 'react';
import messages from './api/messagesData';
import { ACTIVE_MESSAGE, DELETE_MESSAGE } from './actions';

const initialMessagesState = {
    messages: messages,
    activeMessage: null
};

var messageListReducer = function(state = initialMessagesState, action) {
    switch (action.type) {
        case ACTIVE_MESSAGE:
            return  Object.assign({}, state, {
                activeMessage: action.id,
            });
        case DELETE_MESSAGE:
            return  Object.assign({}, state, {
                messages: state.messages.filter((msg) => msg.uid !== action.id)
            });
        default:
            return state
    }
};

export default messageListReducer;
