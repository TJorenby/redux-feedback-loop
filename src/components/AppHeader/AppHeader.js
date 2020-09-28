import React, { Component } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './AppHeader.scss';



class AppHeader extends Component {

  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <Router>
        <div className="header">
          <div className="title-logo">
            <img
              className="header-img"
              src="images/prime-logo.png"
              alt="prime logo"
              height="165px"
              width="165px"
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default AppHeader;
