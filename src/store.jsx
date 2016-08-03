import { createStore } from 'redux';
import messageReducer from './messageReducer';

export const store = createStore(messageReducer, window.devToolsExtension && window.devToolsExtension());