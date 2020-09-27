import React, { Component } from 'react';
import axios from 'axios';
import './ReviewFeedback.scss';
import { connect } from 'react-redux';
import { Divider } from 'antd';

class ReviewFeedback extends Component {
  render() {
    return (
      <div>
        <p>
          How Are You Feeling Today?
          {this.props.results.question1}

        </p>
        <Divider />
        <p>
          How Well Are You Understanding The Content?
          {this.props.results.question2}
        </p>
        <Divider />
        <p>
          How Well Are You Being Supported?
          {this.props.results.question3}
        </p>
        <Divider />
        <p>
          Would You Like to Add A Comment?
          {this.props.results.question4}

        </p>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // Return props for the Location component
  return {
    results: reduxState.resultsReducer
  };
}

export default connect(mapStateToProps)(ReviewFeedback);