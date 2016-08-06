import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'react-thunk';
import messageReducer from './messageReducer';

var store;
if (typeof window === 'undefined') {
    store = createStore(messageReducer);
} else {
    store = createStore(messageReducer, compose(applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension()) );
}

export {store};
// var window = window || { devToolsExtension: function () {console.log('no window')} };

