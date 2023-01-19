import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../../redux/actions/countAction';
export default function ReduxPractice() {
  const dispatch = useDispatch();
  const countedValue = useSelector((state)=>state.countedValue)
  return (
    <div>
      <h2 className='mt-2 mb-2'>Count Increase/Decrese</h2>
      <div className='redux-block'>
        <button className='btn btn-primary' onClick={()=>dispatch(decrement(1))}>-</button>
        <h3>{countedValue}</h3>
        <button className='btn btn-success' onClick={()=>dispatch(increment(1))}>+</button>
      </div>
    </div>
  )
}
