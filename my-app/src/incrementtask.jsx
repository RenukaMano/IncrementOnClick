import React, {useState} from 'react'
const AddTask =()=>{
    const [number, count] = useState(0)
    const total = () => {
    count(number+1)
    }

return(
    <div className = 'add'>
        <div className = 'value'>
            <h1> {number} </h1>
        </div>
        <div className = 'button'>
            <button onClick={total}>Add button</button>
           
        </div>
    </div>
)
}
export default AddTask;