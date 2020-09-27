import React, { Component } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import './Question4.scss';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
      <Router>
        <div className="card">
          <div className="question">
            <h1>Would You Like To Leave A Comment?</h1>
          </div>
          <div className="comment-box">
            <TextField
              id="filled-multiline-static"
              label="Add Comment Here"
              multiline
              rows={4}
              variant="standard"
              style={{ width: 400 }}
              onChange={this.onChange}
            />
          </div>

          <div className="next-btn">
            <Link to='/Review'>
              <Button>
                Next
                <FaChevronRight size={25} />
              </Button>
            </Link>
          </div>

          <div className="back-btn">
            <Link to='/Q3'>
              <Button
              // disabled={this.state.rating < 1}
              >
                <FaChevronLeft size={25} /> Back
              </Button>
            </Link>
          </div>
          <div className="q4-page-count">
            <h3>4/5</h3>
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

export default connect(mapStateToProps)(Question4);
