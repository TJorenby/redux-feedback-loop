import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

//Style Imports
import './Question1.scss';
import StarRating from '../StarRating/StarRating';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { FaChevronRight } from 'react-icons/fa';


class Question1 extends Component {

  state = {
    rating: 0,
  }

  // This function triggers onClick and sets the value of state, along with sending the state value to reduxState.
  setRating = (rating) => {
    this.setState({
      rating: rating
    })

    this.props.dispatch({
      type: "SET_QUESTION_1",
      payload: rating
    });
  }

  // This renders the question, the StarRating component (which collects the ratingValue and passes it as the argument for setRating()), and the Next button. 

  //The Next Button is disabled until this.state.rating < 1. This prevents the user from advancing to the next page until they've provided a rating value. 
  render() {
    console.log('rating is:', this.state.rating);
    return (
      <Router>
        <div className="card">
          <div className="question">
            <h1>How Are You Feeling Today?</h1>
          </div>
          <div className="response-rating">
            <StarRating setRating={this.setRating} />
          </div>
          <div className="next-btn">
            <Link
              disabled={this.state.rating < 1}
              to='/Q2'
            >
              <Button disabled={this.state.rating < 1}>
                Next <FaChevronRight size={25} />
              </Button>
            </Link>
          </div>
          <div className="page-count">
            <h3>1/4</h3>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(Question1);




