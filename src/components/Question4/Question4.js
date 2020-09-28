import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

//Style Imports
import './Question4.scss';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import TextField from '@material-ui/core/TextField';

class Question4 extends Component {

  // Captures values from text field and sends them to Store
  onChange = (event) => {
    this.props.dispatch({
      type: "SET_QUESTION_4",
      payload: event.target.value,
    });
  }

  // This render() contains similar features from previous questions, but with a multi-line text field in place of start-ratings. 
  render() {

    return (
      <Router>
        <div className="card">
          <div className="question">
            <h1>Would You Like To Leave A Comment?</h1>
          </div>
          <div className="comment-box">
            <TextField
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
              <Button>
                <FaChevronLeft size={25} /> Back
              </Button>
            </Link>
          </div>
          <div className="q4-page-count">
            <h3>4/4</h3>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(Question4);
