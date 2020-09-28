import React, { Component, useState } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import './SubmissionConfirmed.scss';
import Button from '@material-ui/core/Button';



class SubmissionConfirmed extends Component {

    render() {

        return (
            <Router>

                <div className="card">
                    <div className="thank-you">
                        <h1>Thanks For Your Feedback!</h1>
                    </div>

                    <div className="submit-btn">
                        <Link to='/'>
                            <Button
                                variant="contained">

                                ADD A NEW RESPONSE
                            </Button>
                        </Link>
                    </div>
                </div>
            </Router>

        );
    }
}


export default SubmissionConfirmed;