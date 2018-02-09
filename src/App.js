import React, { Component } from 'react';
import Mycustomform from './container/mycustomform';
import './App.css';

class App extends Component {
  const handleSubmit=(v)=>{
    console.log(v);
  }
  render() {
    return (
     <Mycustomform handleSubmit={this.handleSubmit}/>
    );
  }
}

export default App;
