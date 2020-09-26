import React, { Component, useState } from 'react';
import axios from 'axios';
import './Question1.scss';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import { Button } from 'antd';
import StarRating from '../StarRating/StarRating';




class Question1 extends Component {

  state = {
    rating: '',
  }

  setRating = (rating) => {
    this.setState({
      rating: rating
    })
  }

  render() {
    console.log('rating is:', this.state.rating);
    return (

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
          <Button>NEXT</Button>
        </div>

      </div>
    );
  }
}

export default Question1;
