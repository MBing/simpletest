/**
 * @author Martin Bing <info@martinbing.com>
 */

import React from 'react';
import { render } from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './components/App';
import Home from './components/Home';
import Messages from './components/Messages';
import Message from './components/Message';
import { activeMessage } from './actions';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

var rootElementDOM = document.getElementById('root');

var routes = (
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Home } />
            <Route path="messages" components={{sidebar: Messages, main: Message }}>
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