import React, { Component } from 'react';
import Mycustomform from './container/mycustomform';
import './App.css';

class App extends Component {
  handleSubmit=(e)=>{
    console.log(e);
  }
  render() {
    return (
     <Mycustomform onSubmit={this.handleSubmit}/>
    );
  }
}

export default App;
