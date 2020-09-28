import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';

//Style Imports
import './ReviewFeedback.scss';
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import Button from '@material-ui/core/Button';



class ReviewFeedback extends Component {

  // POST route to send newResponse(all question responses) to db. This is triggered when the SUBMIT button is clicked
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
          <div className="card">
            <div className="response-review-top">
              <h3>How Are You Feeling Today?</h3>
              <p>
                {
                  [...Array(this.props.question1)].map(star => {
                    return (
                      <FaStar
                        size={15}
                        color={"#696969"}
                      /> // This produces an array and renders a number of star icons based on the value of question1 from reduxStore. This pattern is repeated below for each star-response. 
                    )
                  })
                }
              </p>
            </div>
            <div className="response-review">
              <h3>How well are you understanding the content?</h3>
              <p>
                {
                  [...Array(this.props.question2)].map(star => {
                    return (
                      <FaStar
                        size={15}
                        color={"#696969"}
                      />
                    )
                  })
                }
              </p>
            </div>
            <div className="response-review">
              <h3>How well are you being supported?</h3>
              <p>
                {
                  [...Array(this.props.question3)].map(star => {
                    return (
                      <FaStar
                        size={15}
                        color={"#696969"}
                      />
                    )
                  })
                }
              </p>
            </div>
            <div className="comment-response-review">
              <h3>Would You Like To Add A Comment?</h3>
              <p className="comment-text">
                {this.props.question4}
              </p>
            </div>
          </div>
          <div className="submit-btn">
            <Link to='/SubConfirmed'>
              <Button
                variant="contained"
                onClick={() => this.submitResponse()}>
                SUBMIT FEEDBACK
              </Button>
            </Link>
          </div>
        </div>
      </Router>
    );
  }
}

// These return properties are redundant, but its to reduce the size of the code structure above. 
const mapStateToProps = (reduxState) => {
  return {
    question1: reduxState.resultsReducer.question1,
    question2: reduxState.resultsReducer.question2,
    question3: reduxState.resultsReducer.question3,
    question4: reduxState.resultsReducer.question4,
    newResponse: reduxState.resultsReducer
  };
}

export default connect(mapStateToProps)(ReviewFeedback);