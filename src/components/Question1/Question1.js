import React, { Component } from 'react';
import axios from 'axios';
import './Question1.scss';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import { Button } from 'antd';


class Question1 extends Component {
  render() {
    return (
     
       <div className="card">

        <div className="question">
          <h1>How Are You Feeling Today?</h1>
        </div>

        <div className="response-rating">
          <Rate
            defaultValue={2}
            character={({ index }) => {
              return index + 1;
            }}
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
