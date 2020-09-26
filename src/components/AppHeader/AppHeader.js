import React, { Component } from 'react';
import axios from 'axios';
import './AppHeader.scss';
import 'antd/dist/antd.css';
import { Steps } from 'antd';

const { Step } = Steps;


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
      
       <div className="header">
         <div className="title-logo">
          <img className="header-img" src="images/prime-logo.png" alt="prime logo" height="100px" width="100px"/>
          <h1 className="header-title">Daily Feedback</h1>
        </div>

        <Steps
          type="navigation"
          current={current}
          onChange={this.onChange}
          className="site-navigation-steps"
        >
          <Step status="finish" title="Question 1" />
          <Step status="process" title="Question 2" />
          <Step status="wait" title="Question 3" />
          <Step status="wait" title="Question 4" />
          <Step status="wait" title="Review" />
        </Steps>




       </div>

    );
  }
}

export default AppHeader;
