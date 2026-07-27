import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Demonstrating the 'this' keyword and state initialization in React class component
    this.state = {
      count: 0,
      helloMessage: ''
    };

    // Binding 'this' to event handler methods
    this.incrementCount = this.incrementCount.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  // Method 1: Increment counter value
  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  // Method 2: Say Hello with a static message
  sayHello() {
    this.setState({
      helloMessage: 'Hello! Welcome to React Event Handling in eventexamplesapp.'
    });
  }

  // Method invoking multiple methods (a & b) on Increase button click
  handleIncrease() {
    this.incrementCount(); // Method a
    this.sayHello();      // Method b
  }

  // Method to decrement counter value
  decrementCount() {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div className="card event-card">
        <div className="card-header">
          <span className="badge">Class Component &amp; 'this' Keyword</span>
          <h2>1. Counter Component</h2>
        </div>
        <p className="card-description">
          Demonstrates using the <code>this</code> keyword, state management, and invoking <strong>multiple methods</strong> on single button click.
        </p>

        <div className="counter-display">
          <span className="count-label">Current Count:</span>
          <span className="count-value">{this.state.count}</span>
        </div>

        {this.state.helloMessage && (
          <div className="alert-box success-alert">
            <p><strong>Static Message:</strong> {this.state.helloMessage}</p>
          </div>
        )}

        <div className="button-group">
          <button 
            className="btn btn-primary" 
            onClick={this.handleIncrease}
            id="increment-btn"
          >
            ➕ Increment (Invokes Multiple Methods)
          </button>
          
          <button 
            className="btn btn-danger" 
            onClick={this.decrementCount}
            id="decrement-btn"
          >
            ➖ Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
