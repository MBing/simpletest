import React from 'react';
import messages from './messagesData';
// import { combineReducers } from 'redux';
import { ACTIVE_MESSAGE, DELETE_MESSAGE, SHOW_ALL_MESSAGES } from './actions';

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
//
// const reducers = combineReducers({
//         messageListReducer,
//         messageReducer
//     });
//
// export default reducers;
export default messageListReducer;
