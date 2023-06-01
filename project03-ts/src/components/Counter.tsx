import {useContext} from 'react'
import { countContext } from '../context/CounterContext'



function Counter() {
    const counter = useContext(countContext)

  return (
    <>
    <h1>UseReducer Counter</h1>
    <p style={{fontSize:'2em', fontWeight:'bold'}}>{counter.state}</p>
    <div style={{display:'flex', gap:'5px'}}>
    <button onClick={() => counter.counterDispatch('increment')}>Increment</button>
    <button onClick={() => counter.counterDispatch('decrement')}>Decrement</button>
    <button onClick={() => counter.counterDispatch('reset')}>Reset</button>
    </div>
    </>
  )
}

export default Counter