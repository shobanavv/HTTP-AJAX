import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    friends: []
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
}
    componentDidMount() {
      axios.get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({friends: res.data});
      })
      .catch(error => {
        console.log('there was error', error);
      });
    }
}

export default App;