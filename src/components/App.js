import '../App.css';
import axios from 'axios'
import React, { Component } from 'react';

class App extends Component {

  componentWillMount(){
    axios.get(`http://localhost:8080/auth`).then(function(data){
      console.log(data.data);
    })
  }

  render() {
    return (
      <div className="App">
        <h2> welcome to spapptify! </h2>
        { this.props.children }
      </div>
    );
  }
}

export default App;
