import {useReducer, createContext} from 'react'

const initialState = 0

 const useCounterContext = (initialState = 0) => {


    const reducer = (state: number , action: string) =>{
        switch(action){
            case 'increment':
              return state + 1
            case 'decrement':
              return state - 1
            case 'reset':
              return initialState
            default:
              return state
        }
    
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return {state, dispatch}
}

type UseCounterContextType = ReturnType<typeof useCounterContext>


export const CounterContext = createContext<UseCounterContextType>({state,dispatch})
