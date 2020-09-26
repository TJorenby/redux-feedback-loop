import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import AppHeader from '../AppHeader/AppHeader.js';
import Question1 from '../Question1/Question1';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
     
      <AppHeader/>
      
      <Question1/>
     </Layout>
    );
  }
}

export default App;
