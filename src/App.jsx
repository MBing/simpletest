import React, { Component } from 'react';
import Header from './Header';

// ControllerView

export default class App extends Component {
    render() {
        return (
            <div className="sidebar">
                <aside className="sidebar">
                    {this.props.sidebar}
                </aside>
                <div className="main">
                    {this.props.main}
                </div>
            </div>
        );
      }
}
