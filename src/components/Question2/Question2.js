import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

//Style Imports
import './Question2.scss';
import StarRating from '../StarRating/StarRating';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';


class Question2 extends Component {

  state = {
    rating: 0
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


  // The logic from Question1 component is also applied here. However, a "back" button has been added. This allows the user to return to the previous component and submit a new response. 
  render() {
    console.log('rating is:', this.state.rating);
    return (
      <Router>
        <div className="card">
          <div className="question">
            <h1>How Well Are You Understanding The Content?</h1>
          </div>
          <div className="response-rating">
            <StarRating setRating={this.setRating} />
          </div>
          <div className="next-btn">
            <Link
              disabled={this.state.rating < 1}
              to='/Q3'
            >
              <Button disabled={this.state.rating < 1}>
                Next <FaChevronRight size={25} />
              </Button>
            </Link>
          </div>
          <div className="back-btn">
            <Link to='/'>
              <Button>
                <FaChevronLeft size={25} /> Back
              </Button>
            </Link>
          </div>
          <div className="page-count">
            <h3>2/4</h3>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(Question2);
