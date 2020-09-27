import React, { Component } from 'react';
import axios from 'axios';
import './Question3.scss';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import StarRating from '../StarRating/StarRating';
import { connect } from 'react-redux';


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
          <Button>NEXT</Button>
        </div>

      </div>
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
