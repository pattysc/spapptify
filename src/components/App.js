import '../App.css';
import axios from 'axios'
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Spapptify </h2>

      {this.props.children}

      </div>
    );
  }
}

export default App;
