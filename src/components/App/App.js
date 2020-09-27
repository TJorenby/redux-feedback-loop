import React, { Component } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import './App.scss';
import 'fontsource-roboto';
import AppHeader from '../AppHeader/AppHeader.js';
import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';
import Question4 from '../Question4/Question4';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import SubmissionConfirmed from '../SubmissionConfirmed/SubmissionConfirmed';

class App extends Component {

  render() {
    return (
      <Router>
        <AppHeader />

        <Route path='/' exact>
          <Question1 />
        </Route>

        <Route path='/Q2' exact>
          <Question2 />
        </Route>


        <Route path='/Q3' exact>
          <Question3 />
        </Route>


        <Route path='/Q4' exact>
          <Question4 />
        </Route>

        <Route path='/Review' exact>
          <ReviewFeedback />
        </Route>

        <Route path='/SubConfirmed' exact>
          <SubmissionConfirmed />
        </Route>

      </Router>
    );
  }
}

export default App;
