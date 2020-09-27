import React, { Component } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './Question3.scss';
import StarRating from '../StarRating/StarRating';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';


class Question3 extends Component {

  state = {
    rating: '',
  }

  setRating = (rating) => {
    this.setState({
      rating: rating
    })

    this.props.dispatch({
      type: "SET_QUESTION_3",
      payload: rating
    });


  }

  render() {
    console.log('reduxState is:', this.props.reduxState);
    console.log('rating is:', this.state.rating);
    return (
      <Router>
        <div className="card">
          <div className="question">
            <h1>How Well Are You Being Supported?</h1>
          </div>
          <div className="response-rating">
            <StarRating
              setRating={this.setRating}
            />
          </div>

          <div className="next-btn">
            <Link
              disabled={this.state.rating < 1}
              to='/Q4'>
              <Button
                disabled={this.state.rating < 1}
              >

                Next
                <FaChevronRight size={25} />
              </Button>
            </Link>
          </div>

          <div className="back-btn">
            <Link to='/Q2'>
              <Button
              // disabled={this.state.rating < 1}
              >
                <FaChevronLeft size={25} /> Back
              </Button>
            </Link>
          </div>
          <div className="page-count">
            <h3>3/5</h3>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // Return props for the Location component
  return {
    reduxState
  };
}

export default connect(mapStateToProps)(Question3);
