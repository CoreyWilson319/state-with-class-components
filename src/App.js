import logo from './logo.svg';
import './App.css';
// What does the 2 part import do?
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0, 
      inputtedNumber: 0
    }

    // This works if we don't use the arrow notation on line 18
    // For the increment function
    // arrow notation is simpler but both work
    // this.increment = this.increment.bind(this)
  }

  increment = () => {
    // const amountToAdd = prompt('How much do you want to add?')

    const newCount = this.state.count + this.state.inputtedNumber

    this.setState({count: newCount})



    // let currentCount = this.state.count
    // let newCount = currentCount + 1

    // this.setState({ count: newCount })
  }

  decrement = () => {
    // const amountToDecr = prompt('How much do you want to subtract?')

    const newCount = this.state.count - this.state.inputtedNumber

    this.setState({count: newCount})
    // this.setState({ count: this.state.count - 1 })
  }

  reset = () => {
    this.setState({count: 0})
  }

  changeInput = (evt) => {
    // console.log(evt.target.value)
    const newValue = parseInt(evt.target.value) || ""

    this.setState({inputtedNumber: newValue})
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <input value={this.state.inputtedNumber} onChange={this.changeInput}/>
        <br></br>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default App;
