import { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType = UpdateAction | ResetAction

type UpdateAction = {
    type: 'increment' | 'decrement' 
    payload: number
}

type ResetAction= {
    type: 'reset'
}

const initialValue = { count: 0 };

function reducer(state:StateType, action: ActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialValue
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({type: "reset", })}>
        reset
      </button>
    </div>
  );
};
