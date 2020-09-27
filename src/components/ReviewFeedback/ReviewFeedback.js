import React, { Component } from 'react';
import axios from 'axios';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import './ReviewFeedback.scss';
import { connect } from 'react-redux';
import { Divider, Button } from 'antd';
import { FaStar } from 'react-icons/fa';



class ReviewFeedback extends Component {


  submitResponse = () => {
    console.log('in submitResponse:', this.props.newResponse);
    let newResponse = this.props.newResponse
    axios({
      method: 'POST',
      url: '/feedback',
      data: newResponse
    }).then(response => {
      console.log('back from POST with:', response);
    }).catch(err => {
      console.log('error with POST', err);
    });
  }
  render() {
    return (
      <Router>
        <div >
          <div className="review-card">
            <div className="response-review">
              <h3>How Are You Feeling Today?</h3>
              <p>
                {
                  [...Array(this.props.question1)].map(star => {
                    return (
                      <FaStar
                        className="star"
                        size={15}
                        color={"#e4e5e9"}
                      />
                    )
                  })
                }
              </p>
            </div>
            <br />
            <div className="response-review">
              <h3>How well are you understanding the content?</h3>
              <p>
                {
                  [...Array(this.props.question2)].map(star => {
                    return (
                      <FaStar
                        className="star"
                        size={15}
                        color={"#e4e5e9"}
                      />
                    )
                  })
                }
              </p>
            </div>
            <br />
            <div className="response-review">
              <h3>How well are you being supported?</h3>
              <p>
                {
                  [...Array(this.props.question3)].map(star => {
                    return (
                      <FaStar
                        className="star"
                        size={15}
                        color={"#e4e5e9"}
                      />
                    )
                  })
                }
              </p>
            </div>
            <br />
            <div className="comment-response-review">
              <h3>Would You Like To Add A Comment?</h3>
              <p className="comment-text">
                {this.props.question4}
              </p>
            </div>
          </div>
          <div className="submit-btn">
            <button onClick={() => this.submitResponse()}>
              <Link to='/SubConfirmed'>SUBMIT FEEDBACK</Link>
            </button>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // Return props for the Location component
  return {
    question1: reduxState.resultsReducer.question1,
    question2: reduxState.resultsReducer.question2,
    question3: reduxState.resultsReducer.question3,
    question4: reduxState.resultsReducer.question4,
    newResponse: reduxState.resultsReducer

  };
}

export default connect(mapStateToProps)(ReviewFeedback);