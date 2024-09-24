import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset ,incrementByAmount} from '../redux/counterSlice'


const Counter = () => {
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const [amount , setAmount]=useState(0)
  const handleIncrementAmount =()=>{
      if (amount) {
        // dispatch action with input amount
        dispatch(incrementByAmount(amount))
      }else{
        alert("pls fill the form!!")
      }
   }
  return (
     <div className='border rounded p-5 text-center'>
        <h1 style={{fontSize:'100px'}}> {count}</h1>
            <div style={{width:"500px"}} className=' d-flex justify-content-between  mt-5  '>
    
                <button onClick={()=>dispatch(decrement())} className=' btn btn-warning rounded color-black '>DECREMENT</button>
                <button onClick={()=>dispatch(reset())} className=' btn btn-danger rounded color-black  '>RESEST</button>
                <button onClick={()=>dispatch(increment())} className=' btn btn-success rounded color-black  '>INCREAMENT</button>
    
            </div>
            <div  className=' d-flex justify-content-between align-items-center mt-5    '>
    
   <input onChange={e=>setAmount(e.target.value)}  type="text" placeholder='input icreament amount' className='form-control me-3' />
    <button onClick={handleIncrementAmount} className=' btn btn-primary rounded color-black'>INCREAMENT By Amount</button>

</div>
     </div>
  )
}

export default Counter