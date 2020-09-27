import React, { Component, useState } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './Question1.scss';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import StarRating from '../StarRating/StarRating';
import { connect } from 'react-redux';


class Question1 extends Component {

  state = {
    rating: 0,
  }

  setRating = (rating) => {
    this.setState({
      rating: rating
    })

    this.props.dispatch({
      type: "SET_QUESTION_1",
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
            <h1>How Are You Feeling Today?</h1>
          </div>
          <div className="response-rating">
            <StarRating
              setRating={this.setRating}
            />
          </div>

          <div className="next-btn">
            <Button
              disabled={this.state.rating < 1}
            >
              <Link to='/Q2'>NEXT</Link>
            </Button>
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

export default connect(mapStateToProps)(Question1);
