import React, {useState} from 'react'

function Test() {

    const [shekpe, setShekpe] = useState({firstVal:'', secondVal: ''})

    // handleFirstVal = () => {
        
    // }

    // handleSecondVal = () => {
        
    // }
    return (
        <div>
            <button onClick = {()=>setShekpe({...shekpe,
            firstVal: 'Okay, I\'m Timi'
        })}>FirstVal?</button>
            <button onClick = {()=>setShekpe({...shekpe,
            secondVal: `${shekpe.firstVal}`
        })}>SecondVal?</button>
        <h2>{shekpe.firstVal}</h2>
        <h2>{shekpe.secondVal}</h2>
        </div>
    )
}

export default Test
