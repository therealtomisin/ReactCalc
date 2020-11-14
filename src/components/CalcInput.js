import React from 'react'

function CalcInput({firstVal, secondVal}) {
    return (
        <div className='inputBody'>
            <span className = 'input firstInput'>
              {secondVal}
            </span>
            <span className = 'input secondInput'>
              {firstVal}
            </span>
        </div>
    )
}

export default CalcInput
