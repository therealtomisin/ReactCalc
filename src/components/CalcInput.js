import React from 'react'

function CalcInput(props) {
    return (
        <div className='inputBody'>
            <span className = 'input firstInput'>
              {props.secondVal}
            </span>
            <span className = 'input secondInput'>
              {props.firstVal}
            </span>
        </div>
    )
    console.log(props.answer)
}

export default CalcInput
