import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import PortraitList from './PortraitList'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          link="https://www.google.com"
          color="pink"
          header="Paintr"
          tagline="Big Money Moves"
          icon="money"
        />
        <PortraitList/>
      </div>
    )
  }
}

export default App;
