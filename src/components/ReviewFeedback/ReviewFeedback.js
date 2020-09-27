import React, { Component } from 'react';
import axios from 'axios';
import './ReviewFeedback.scss';
import { connect } from 'react-redux';
import { Divider, Button } from 'antd';
import { FaStar } from 'react-icons/fa';

class ReviewFeedback extends Component {
  render() {
    return (
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
          <Divider />
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
          <Divider />
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
          <Divider />
          <div className="comment-response-review">

            <h3>Would You Like To Add A Comment?</h3>
            <p className="comment-text">{this.props.question4} Test Comment with a lot of text in order to check layout. Test Comment with a lot of text in order to check layout. Test Comment with a lot of text in order to check layout. Test Comment with a lot of text in order to check layout. Test Comment with a lot of text in order to check layout. Test Comment with a lot of text in order to check layout</p>
          </div>


        </div>

        <div className="submit-btn">
          <Button>SUBMIT FEEDBACK</Button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // Return props for the Location component
  return {
    question1: reduxState.resultsReducer.question1,
    question2: reduxState.resultsReducer.question2,
    question3: reduxState.resultsReducer.question3,
    question4: reduxState.resultsReducer.question4
  };
}

export default connect(mapStateToProps)(ReviewFeedback);