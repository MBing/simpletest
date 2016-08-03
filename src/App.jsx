import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="content">
                    <aside className="sidebar">
                        {this.props.sidebar}
                    </aside>
                    <div className="main">
                        {this.props.main}
                    </div>
                </div>
                {this.props.children}
            </div>
        );
      }
}
