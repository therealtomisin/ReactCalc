import React, {useState} from 'react'
import CalcInput1 from './CalcInput1'

function CalcBody1() {

    const [firstVal, setFirstVal] = useState('')
    const [secondVal, setSecondVal] = useState('')
    const [operation, setOperation] = useState('')
    const [answer, setAnswer] = useState('')

    const updateInput = (e) => {
        if(operation.length > 1){
            return
        }else{
            setOperation(operation + e.target.textContent)
            setSecondVal(firstVal + operation)
            setFirstVal('')
        }
    }

    return (
        <div className = 'calcBody'>
            <CalcInput1 operation = {operation} answer = {answer} firstVal = {firstVal} secondVal = {secondVal}/>
                <div className = 'buttons'>
                    <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>1</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>2</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>3</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>4</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>5</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>6</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>7</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>8</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>9</button>
                    <button className = 'btn operationButton' onClick = {(e)=>updateInput(e)}>+</button>
                    <button className = 'btn operationButton' onClick = {(e)=>setOperation(operation + e.target.textContent)}>-</button>
                    <button className = 'btn operationButton' onClick = {(e)=>setOperation(operation + e.target.textContent)}>/</button>
                    <button className = 'btn operationButton' onClick = {(e)=>setOperation(operation + e.target.textContent)}>*</button>
                    <button className = 'btn operationButton' onClick = {()=>{setFirstVal('') 
                                                                                setSecondVal('')
                                                                        }}>del</button>
                    <button className = 'btn operationButton' onClick = {()=>{this.carryOutOptn()
                    console.log(this.state.firstVal)}}>=</button>
                </div> 
        </div>
    )
}

export default CalcBody1
