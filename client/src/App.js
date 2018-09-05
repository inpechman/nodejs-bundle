import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewMemberForm from "./components/new-member-form";
import ShowAllMembers from "./components/show-all-members";

class App extends Component {
  render() {
    return (
      <div className="App">
          <NewMemberForm/>
          <ShowAllMembers/>
      </div>
    );
  }
}

export default App;
