import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HighCharts from './HighCharts/HighCharts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HighCharts />
      </div>
    );
  }
}

export default App;
