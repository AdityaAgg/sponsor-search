import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {FilterableOrgList} from './filterableorglist';

class App extends Component {
  render() {
    return (
      <div className="App">

        <FilterableOrgList/>
      </div>
    );
  }
}

export default App;
