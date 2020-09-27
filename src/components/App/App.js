import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import AppHeader from '../AppHeader/AppHeader.js';
import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';
import Question4 from '../Question4/Question4';
import { Layout } from 'antd';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>

        <AppHeader />

        <Question1 />
        <Question2 />
        <Question3 />
        <Question4 />

      </Layout>
    );
  }
}

export default App;
