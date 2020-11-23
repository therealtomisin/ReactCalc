import React, { Component } from 'react'
import './App.css'
import CalcBody1 from './components/CalcBody1'
import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <CalcBody1 />
        <Test />
      </div>
    )
  }
}

export default App
