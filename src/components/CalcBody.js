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
        if (this.state.firstVal.length >= 10) {
            return
        } else if(this.state.answer !== ''){
            return
        }else {
            this.setState({
                firstVal: this.state.firstVal + e.target.textContent
            })
        }
    }

    updateOperation = (e) => {
        if(this.state.secondVal !== '' && this.state.firstVal === '') return;
        if(this.state.operation !== '' && this.state.firstVal){
            this.carryOutOptn()
            this.setState((prevState)=>({
                operation: e.target.textContent,
                secondVal: `${prevState.firstVal}  ${e.target.textContent}`,
                firstVal: '',
                answer: ''
            }))
        }else{
            this.setState({
                secondVal: `${this.state.firstVal} ${e.target.textContent}`,
                firstVal: '',
                operation: e.target.textContent,
                answer: ''
            })
        }
    }

    carryOutOptn = () => {
        if (this.state.firstVal === '') return;
        if(this.state.firstVal !== '' && this.state.secondVal === '') return this.state.firstVal;
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
            this.setState({
            firstVal: newVal,
            secondVal: '',
            answer: newVal,
            operation: ''
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
            <div className='calcBody'>
                <CalcInput operation={this.state.operation} answer={this.state.answer} firstVal={this.state.firstVal} secondVal={this.state.secondVal} />
                <div className='buttons'>
                    <button className='btn numberButton' onClick={this.updateInput}>1</button>
                    <button className='btn numberButton' onClick={this.updateInput}>2</button>
                    <button className='btn numberButton' onClick={this.updateInput}>3</button>
                    <button className='btn numberButton' onClick={this.updateInput}>4</button>
                    <button className='btn numberButton' onClick={this.updateInput}>5</button>
                    <button className='btn numberButton' onClick={this.updateInput}>6</button>
                    <button className='btn numberButton' onClick={this.updateInput}>7</button>
                    <button className='btn numberButton' onClick={this.updateInput}>8</button>
                    <button className='btn numberButton' onClick={this.updateInput}>9</button>
                    <button className = 'btn operationButton' onClick = {this.updateOperation}>+</button>
                    <button className = 'btn operationButton' onClick = {this.updateOperation}>-</button>
                    <button className = 'btn operationButton' onClick = {this.updateOperation}>/</button>
                    <button className = 'btn operationButton' onClick = {this.updateOperation}>*</button>
                    <button className='btn operationButton' onClick={this.handleDelete}>del</button>
                    <button className='btn operationButton' onClick={() => { this.carryOutOptn() }}>=</button>
                </div>
            </div>
        )
    }
}

export default CalcBody
