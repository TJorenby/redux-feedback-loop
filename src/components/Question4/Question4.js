import React, { Component } from 'react';
import axios from 'axios';
import './Question4.scss';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';

const { TextArea } = Input;

class Question4 extends Component {

  state = {
    rating: '',
  }

  onChange = (event) => {
    //dispatch
    this.props.dispatch({
      type: "SET_QUESTION_4",
      payload: event.target.value,
    });
  }

  render() {
    console.log('reduxState is:', this.props.reduxState);
    console.log('rating is:', this.state.rating);
    return (

      <div className="card">
        <div className="question">
          <h1>Would You Like To Leave A Comment?</h1>
        </div>
        <div className="comment-box">
          <TextArea
            rows={4}
            placeholder="Add Comment Here"
            onChange={this.onChange}
          />
        </div>

        <div className="next-btn">
          <Button>SUBMIT FEEDBACK</Button>
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

export default connect(mapStateToProps)(Question4);
