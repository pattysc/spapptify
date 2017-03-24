import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="Welcome">
        <p> I made this app because I love discovering new music, but when apps 'recommend' me new music they usually show me bands I already know... womp womp.</p>

        <p> What I wanted was some sort of 'second degree recommendation' - recommend me bands based on bands I would like <i> based on bands I like</i> - that's Spapptify! </p>

        <p> I hope you discover new music with this app, and that you appreciate the punny name! </p>

        <Link to='/search'><button>Let's get started</button></Link>
      </div>
    );
  }
}

export default App;
