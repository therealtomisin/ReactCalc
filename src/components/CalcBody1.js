import React, {useState} from 'react'
import CalcInput1 from './CalcInput1'

function CalcBody1() {

    const [allVals, setAllVals] = useState({
        firstVal: '',
        secondVal: '',
        operation: '',
        answer: ''
    })
    // const [firstVal, setFirstVal] = useState('')
    // const [secondVal, setSecondVal] = useState('')
    // const [operation, setOperation] = useState('')
    // const [answer, setAnswer] = useState('')

    const updateOperation = (e) => {
        console.log(allVals.firstVal.length)
        console.log(typeof(allVals.firstVal))
        console.log(typeof allVals.operation)
        if(allVals.secondVal !== '' && allVals.firstVal === '') return;
        if(allVals.operation !== '' && allVals.firstVal){
            carryOutOptn()
            setAllVals({...allVals,
                operation: e.target.textContent,
                secondVal: `${allVals.firstVal} ${e.target.textContent}`,
                firstVal: '',
                answer: ''
            })
            //console.log(allVals.secondVal.length)
            //console.log(allVals.operation.length)
                // setOperation(e.target.textContent)
                // setSecondVal(`${allVals.firstVal}  ${e.target.textContent}`)
                // setFirstVal('')
                // setAnswer('')
        }
        if(allVals.operation.length > 1){
            return
        }
        else{
            // setOperation(e.target.textContent)
            // setSecondVal(`${firstVal} ${e.target.textContent}`)
            // setFirstVal('')
            setAllVals({
                operation: e.target.textContent,
                secondVal: `${allVals.firstval} ${e.target.textContent}`,
                firstVal: '',
                answer: ''
            })
            //console.log(allVals.secondVal.length)
        }
}

    const carryOutOptn = () => {
        console.log('aloha')
        if (allVals.firstVal === '') return;
        if(allVals.firstVal !== '' && allVals.secondVal === '') return allVals.firstVal;
        var newVal;
        let firstElem = parseFloat(allVals.firstVal)
        let secondElem = parseFloat(allVals.secondVal)
        switch(allVals.operation){
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
        
            // setFirstVal(newVal)
            // setSecondVal('')
            // setAnswer(newVal)
            // setOperation('')
            setAllVals({
                firstVal: newVal,
                secondVal: '',
                operation: '',
                answer: newVal
            })
        
    } 

    const handleDelete = () => {
        setAllVals({
            firstVal: '',
            secondVal: ''
        })
            // setFirstVal('')
            // setSecondVal('')
    }

    return (
        <div className = 'calcBody'>
            <CalcInput1 operation = {allVals.operation} answer = {allVals.answer} firstVal = {allVals.firstVal} secondVal = {allVals.secondVal}/>
                <div className = 'buttons'>
                    <button className = 'btn numberButton' onClick = {(e)=>setAllVals({firstVal: allVals.firstVal + e.target.textContent})}>1</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setAllVals({firstVal: allVals.firstVal + e.target.textContent})}>2</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setAllVals({firstVal: allVals.firstVal + e.target.textContent})}>3</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setAllVals({firstVal: allVals.firstVal + e.target.textContent})}>4</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setAllVals({firstVal: allVals.firstVal + e.target.textContent})}>5</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setAllVals({firstVal: allVals.firstVal + e.target.textContent})}>6</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setAllVals({firstVal: allVals.firstVal + e.target.textContent})}>7</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setAllVals({firstVal: allVals.firstVal + e.target.textContent})}>8</button>
                    <button className = 'btn numberButton' onClick = {(e)=>setAllVals({firstVal: allVals.firstVal + e.target.textContent})}>9</button>
                    <button className = 'btn operationButton' onClick = {(e)=>updateOperation(e)}>+</button>
                    <button className = 'btn operationButton' onClick = {(e)=>updateOperation(e)}>-</button>
                    <button className = 'btn operationButton' onClick = {(e)=>updateOperation(e)}>/</button>
                    <button className = 'btn operationButton' onClick = {(e)=>updateOperation(e)}>*</button>
                    <button className = 'btn operationButton' onClick = {()=>handleDelete()}>del</button>
                    <button className = 'btn operationButton' onClick = {()=>carryOutOptn()}>=</button>
                </div> 
        </div>
    )
}

export default CalcBody1




// import React, {useState} from 'react'
// import CalcInput1 from './CalcInput1'

// function CalcBody1() {

//     const [allVals, setAllVals] = useState({
//         firstVal: '',
//         secondVal: '',
//         operation: '',
//         answer: ''
//     })
//     const [firstVal, setFirstVal] = useState('')
//     const [secondVal, setSecondVal] = useState('')
//     const [operation, setOperation] = useState('')
//     const [answer, setAnswer] = useState('')

//     const updateOperation = (e) => {
//         if(secondVal !== '' && firstVal === '') return;
//         if(operation !== '' && firstVal){
//             carryOutOptn()
//                 setOperation(e.target.textContent)
//                 setSecondVal(`${allVals.firstVal}  ${e.target.textContent}`)
//                 setFirstVal('')
//                 setAnswer('')
//         }
//         if(operation.length > 1){
//             return
//         }else{
//             setOperation(e.target.textContent)
//             setSecondVal(`${firstVal} ${e.target.textContent}`)
//             setFirstVal('')
//         }
// }

//     const carryOutOptn = () => {
//         console.log('aloha')
//         if (firstVal === '') return;
//         if(firstVal !== '' && secondVal === '') return firstVal;
//         var newVal;
//         let firstElem = parseFloat(firstVal)
//         let secondElem = parseFloat(secondVal)
//         switch( operation){
//             case '+' :
//             newVal = firstElem + secondElem
//             break
//             case '-':
//             newVal = secondElem - firstElem
//             break
//             case '/':
//             newVal = secondElem / firstElem
//             break
//             case '*':
//             newVal = secondElem * firstElem
//             break
//             default:
//         }
        
//             setFirstVal(newVal)
//             setSecondVal('')
//             setAnswer(newVal)
//             setOperation('')
//             setAllVals({
//                 firstVal: newVal,
//                 secondVal: '',
//                 operation: '',
//                 answer: newVal
//             })
        
//     } 

//     const handleDelete = () => {
//             setFirstVal('')
//             setSecondVal('')
//     }

//     return (
//         <div className = 'calcBody'>
//             <CalcInput1 operation = {operation} answer = {answer} firstVal = {firstVal} secondVal = {secondVal}/>
//                 <div className = 'buttons'>
//                     <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>1</button>
//                     <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>2</button>
//                     <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>3</button>
//                     <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>4</button>
//                     <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>5</button>
//                     <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>6</button>
//                     <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>7</button>
//                     <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>8</button>
//                     <button className = 'btn numberButton' onClick = {(e)=>setFirstVal(firstVal + e.target.textContent)}>9</button>
//                     <button className = 'btn operationButton' onClick = {(e)=>updateOperation(e)}>+</button>
//                     <button className = 'btn operationButton' onClick = {(e)=>updateOperation(e)}>-</button>
//                     <button className = 'btn operationButton' onClick = {(e)=>updateOperation(e)}>/</button>
//                     <button className = 'btn operationButton' onClick = {(e)=>updateOperation(e)}>*</button>
//                     <button className = 'btn operationButton' onClick = {()=>handleDelete()}>del</button>
//                     <button className = 'btn operationButton' onClick = {()=>carryOutOptn()}>=</button>
//                 </div> 
//         </div>
//     )
// }

// export default CalcBody1

