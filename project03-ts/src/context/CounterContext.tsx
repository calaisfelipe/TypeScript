import {useReducer, createContext, ReactNode, ReactElement} from 'react'

type StateType = {
  count: number;
  text: string;
}

export const initStat : StateType = 0

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

type ChildrenType = {
  children?: ReactElement | undefined
}



const initContextState: UseCounterContextType = {
  state: initState,
  dispatch: () => { },
}


export const CounterContext = createContext<UseCounterContextType>(initContextState)

export const CounterProvider = ({children, ...initState } :ChildrenType & StateType ): ReactNode => {
 return  <CounterContext.Provider value={useCounterContext(initState)}>
  {children}
  </CounterContext.Provider>
}
