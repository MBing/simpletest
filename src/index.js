import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './App';
import Home from './Home';
import Messages from './Messages';
import Message from './Message';
import { activeMessage } from './actions';
import { Router, Route, browserHistory } from 'react-router';

var rootElementDOM = document.getElementById('root');

var store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

var routes = (
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            {/*<Route path="home" component={ Home }/>*/}
            <Route path="messages" components={{sidebar: Messages, main: Home}}>
                {/*<IndexRoute component={ Messages }/>*/}
                <Route path=":uid" component={ Message } onEnter={handleEnter}/>
            </Route>
        </Route>
    </Router>
);
function handleEnter(nextState) {
    store.dispatch(activeMessage(nextState.params.uid));
}
document.addEventListener( 'DOMContentLoaded', function() {
    render(
        <Provider store={store} >
            {routes}
        </Provider>,
        rootElementDOM
    )
});