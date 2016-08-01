import React from 'react';
import MessagesData from './messagesData';
// import { combineReducers } from 'redux';
import { ACTIVE_MESSAGE, DELETE_MESSAGE, SHOW_ALL_MESSAGES } from './actions';

const initialMessagesState = {
    messages: MessagesData.getAll(),
    message: MessagesData.getMessageByIndex(0)
};
var messageListReducer = function(state = initialMessagesState, action) {
    switch (action.type) {
        case SHOW_ALL_MESSAGES:
            return  Object.assign({}, state, {
                messages: state.messages
            });
        case ACTIVE_MESSAGE:
            console.log('active msg id', action.id);
            console.log('active msg id', props);
            // action.id beschikbaar om bericht op te halen
            console.log('state op messages voor active msg', state.message);
            return  Object.assign({}, state, {
                message: state.message,
                id: action.id
            });
        case DELETE_MESSAGE:
            MessagesData.deleteMessage(action.id);
            // state.messages
            console.log('vanuit action ', action.id);
            console.log('vanuit action de state ', state.messages);
            // console.log('vanuit action get all', MessagesData.getAll());
            // console.log(state.messages.filter((msg) => msg.uid !== action.id));
            return  Object.assign({}, state, {
                messages: state.messages.slice(1)
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
