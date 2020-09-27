import React, { Component } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './AppHeader.scss';
import 'antd/dist/antd.css';



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
            <img className="header-img" src="images/prime-logo.png" alt="prime logo" height="100px" width="100px" />
            <h1 className="header-title">Daily Feedback</h1>
          </div>

          <div className="steps">


          </div>






        </div>
      </Router>
    );
  }
}

export default AppHeader;
