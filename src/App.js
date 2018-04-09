import React, { Component } from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {number: 0};
    
    
    this.addOne = this.addOne.bind(this);
    this.subtractOne = this.subtractOne.bind(this);
  }
  
  addOne() {
    this.setState((prevState, props) => ({
      number : prevState.number + props.interval
    }));
  }
  
    subtractOne() {
    this.setState((prevState, props) => ({
      number : prevState.number - props.interval
    }));
  }

  render() {
    return (
      <div>
          <button onClick={this.addOne}>{'+'}</button>
          <h1>{this.state.number}</h1>
         <button onClick={this.subtractOne}>{'-'}</button>
      </div>
    );
  }
}

export default Counter