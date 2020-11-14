import React, { Component } from 'react'
import CalcInput from './CalcInput'

class CalcBody extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstVal: '',
             secondVal: '',
             operation: '',
             answer: ''
        }
    }
    updateInput = (e) => {
        if(this.state.firstVal.length >= 10){
            return
        } else {
            this.setState({
                firstVal: this.state.firstVal + e.target.textContent
            })
        }
    }
    updateOperation = (e) => {
        if(this.state.secondVal && this.state.firstVal){
            this.carryOutOptn()
            console.log(this.state.answer)
            this.setState({
                operation: e.target.textContent,
                secondVal: `${this.state.firstVal} ${e.target.textContent}`,
                firstVal: ''
            })
        }else{
            this.setState({
                secondVal: `${this.state.firstVal} ${e.target.textContent}`,
                firstVal: '',
                operation: e.target.textContent
            })
        }
    }
    carryOutOptn = () => {
        var newVal;
        let firstElem = parseFloat(this.state.firstVal)
        let secondElem = parseFloat(this.state.secondVal)
        switch(this.state.operation){
            case '+' :
            newVal = firstElem + secondElem
            break
            case '-':
            newVal = secondElem - firstElem
            break
            case '/':
            newVal = secondElem / firstElem
            break
            case '*':
            newVal = secondElem * firstElem
            break
            default:
        }
        console.log(newVal)
            this.setState({
            firstVal: newVal,
            secondVal: '',
            answer: newVal
        })
    }
    
    handleDelete = () => {
        this.setState({
            firstVal: '',
            secondVal: ''
        })
    }
    render() {
        return (
            <div>
                <div className = 'calcBody'>
                    <CalcInput firstVal = {this.state.firstVal} secondVal = {this.state.secondVal}/>
                <div className = 'buttons'>
                    <button className = 'btn numberButton' onClick = {this.updateInput}>1</button>
                    <button className = 'btn numberButton' onClick = {this.updateInput}>2</button>
                    <button className = 'btn numberButton' onClick = {this.updateInput}>3</button>
                    <button className = 'btn numberButton' onClick = {this.updateInput}>4</button>
                    <button className = 'btn numberButton' onClick = {this.updateInput}>5</button>
                    <button className = 'btn numberButton' onClick = {this.updateInput}>6</button>
                    <button className = 'btn numberButton' onClick = {this.updateInput}>7</button>
                    <button className = 'btn numberButton' onClick = {this.updateInput}>8</button>
                    <button className = 'btn numberButton' onClick = {this.updateInput}>9</button>
                    <button className = 'btn operationButton' onClick = {this.updateOperation}>+</button>
                    <button className = 'btn operationButton' onClick = {this.updateOperation}>-</button>
                    <button className = 'btn operationButton' onClick = {this.updateOperation}>/</button>
                    <button className = 'btn operationButton' onClick = {this.updateOperation}>*</button>
                    <button className = 'btn operationButton' onClick = {this.handleDelete}>del</button>
                    <button className = 'btn operationButton' onClick = {()=>{this.carryOutOptn()
                    console.log(this.state.firstVal)}}>=</button>
                </div> 
                </div>
            </div>
        )
    }
}

export default CalcBody
