import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Home from './Home';
import Messages from './Messages';
import Message from './Message';
import MessageDelete from './MessageDelete';
import { Router, Route, Redirect, browserHistory } from 'react-router';


var routes = (
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            {/*<Route path="home" component={ Home }/>*/}
            <Route path="messages" components={{sidebar: Messages, main: Home}}>
                {/*<IndexRoute component={ Messages }/>*/}
                <Route path=":uid" component={ Message }/>
                <Route path="delete/:uid" component={ MessageDelete }/>
            </Route>
        </Route>
    </Router>
);

document.addEventListener( 'DOMContentLoaded', function() {
    render(routes, document.getElementById('root'));
});