
import { useReducer } from 'react';
import './App.css';
import AddValue from './component/AddValue';

const reducerFun = (state: any, action: any) => {

  
  switch (action.type) {
    case "increment":
      const newState = {
        ...state,
        counter: state.counter  + 1,
        status: action.type
      }
      return newState
    case "decrement":

    const newState2 = {
      ...state,
      counter: state.counter  - 1,
      status: action.type
    }
      
      return newState2

    default:
      return state
  }
};

const intialState = {counter: 0, status: 'start'};

function App() {
  const [state, dispatch] = useReducer(reducerFun, intialState);

  const incrementValue = () => {
    console.log('increment', state)
    console.log('incrementValue')
    dispatch({ type: 'increment' });
  }

  const decrementValue = () => {
    console.log('decrement', state)
    console.log('decrementValue')
    dispatch({ type: 'decrement' });
  }

  return <div>
        {/* <AddValue/> */}
       <p>Counter = {state.counter}</p>
       <br/><br/>
       <p>Status = {state.status}</p>

   <button type="button" onClick={incrementValue}>increment</button>

   <br /> 

    <button type="button" onClick={decrementValue}>decrement</button>

  </div>;
}

export default App;

