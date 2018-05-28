import React, { Component } from 'react';
import './App.css';
import Form from "./Form"

class App extends Component {
  state = {items: []}

  componentDidMount() {
    fetch('/items')
      .then(res => res.json())
      .then(items => this.setState({items}));
  }

  componentDidUpdate() {
    fetch('/items')
      .then(res => res.json())
      .then(items => this.setState({items}));
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome! </h1>
        <Form onChange={fields => this.change(fields)} />
        <h1>Items</h1>
        {this.state.items.map(item =>
          <div>
          <div key = {item.name}>{item.name}</div> 
          <div key = {item.desc}>{item.desc}</div>
          <div key = {item.price}>{item.price}</div>
          <div key = {item.quantity}>{item.quantity}</div>
          <br/>        
          </div>
        )}
      </div>
    );
  }
}

export default App;
