import React, { Component, useState } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import './SubmissionConfirmed.scss';



class SubmissionConfirmed extends Component {

    render() {

        return (
            <Router>

                <div className="card">
                    <div className="question">
                        <h1>Thanks For Your Feedback!</h1>
                    </div>

                    <div className="next-btn">
                        <button>
                            <Link to='/'>LEAVE MORE FEEDBACK</Link>
                        </button>
                    </div>
                </div>
            </Router>

        );
    }
}


export default SubmissionConfirmed;