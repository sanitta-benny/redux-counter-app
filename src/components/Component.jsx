import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux1/counterSlice'

function Component() {
  //to create state
  const [range,setRange]=useState("")
//range
console.log(range)


  const dispatch = useDispatch() //for dispatch call
  //component can access state by using useSelector hook
  const count =useSelector((state)=>state.counter.value)
  return (
  
    <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column 'style={{height:'auto',backgroundColor:"white"}}>
    <h1  style={{fontSize:"90PX",backgroundColor:"white"}}>{count}</h1>
    <div  style={{height:'auto',backgroundColor:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-evetly"}}  className='mt-5'>
        <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 '>Increment</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-2'>Reset</button>
        <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3 ms-2'>Decrement</button>
  
    </div>
    {/* input box */}
   <div style={{backgroundColor:"white"}}> <input onChange={(e)=>setRange(e.target.value)}     style={{borderColor:"blue"}} className='form-control w-100 mt-3' placeholder='Enter the range' type="text" /></div>

</div>
  )
}

export default Component