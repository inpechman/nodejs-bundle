import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewMemberForm from "./components/new-member-form";

class App extends Component {
  render() {
    return (
      <div className="App">
          <NewMemberForm/>
      </div>
    );
  }
}

export default App;
