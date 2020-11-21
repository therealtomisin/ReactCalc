import React from 'react'

function CalcInput1(props) {
    return (
        <div className = 'inputBody'>
            <span className = 'input firstInput'>
              {props.secondVal}
            </span>
            <span className = 'input secondInput'>
              {props.firstVal}
            </span>
        </div>
    )
}

export default CalcInput1
