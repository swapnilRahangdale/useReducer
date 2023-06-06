import { useReducer, useState } from "react";
type stateType = {
    username: 'ARC'
  counter: number;
  status: 'increment' | 'decrement' | 'start' ;
};

type actionType = { type: string };
const reducerFun = (state: stateType, action: actionType) => {
    console.log('action',action)
  switch (action.type) {
    case "increment":
      return {
        ...state,
       counter: state.counter + 1,
        status: action.type
    };

    case "decrement":
      return {
        ...state,
       counter: state.counter - 1,
        status: action.type
    };;

    default:
      return state;
  }
};

const intialState: stateType = { counter: 1, status: "start", username: 'ARC' };

const AddValue = () => {
  // const [ counter, setCounter] = useState(0);
  // const [ status, setStatus] = useState('start');

  const [state, dispatch] = useReducer(reducerFun, intialState);

  return (
    <div>
        <br />
        username: {state.username}
      <br />
      <p>counter : {state.counter}</p>
      <br />
      <p>status : {state.status}</p>
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default AddValue;
