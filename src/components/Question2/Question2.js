import React, { Component } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './Question2.scss';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import StarRating from '../StarRating/StarRating';
import { connect } from 'react-redux';


class Question2 extends Component {

  state = {
    rating: '',
  }

  setRating = (rating) => {
    this.setState({
      rating: rating
    })

    this.props.dispatch({
      type: "SET_QUESTION_2",
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
            <h1>How Well Are You Understanding The Content?</h1>
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
              <Link to='/Q3'>NEXT</Link>
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

export default connect(mapStateToProps)(Question2);
