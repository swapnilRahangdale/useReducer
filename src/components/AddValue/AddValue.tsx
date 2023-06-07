import { useReducer } from 'react';
import './App.css';

type stateType ={
  username: 'ActionForm';
  counter: number;
  status: 'increment' | 'decrement' | 'Start';
}
type actionType ={type: string};
const reducerFun = (state:stateType, action:actionType) =>{

  console.log('action',action)

  switch (action.type) {
    case "increment":
      
      return {
        ...state,
         counter:state.counter +1,
         status: action.type
      };

      case "decrement":
      
      return {
        ...state,
      counter: state.counter -1,
      status: action.type
    };;
      
    default:
      return state
  }
  


};


const initialState:stateType = {counter:0, status:'Start', username:'ActionForm'}

function AddValue() {
  
  const [state, dispatch] = useReducer(reducerFun,initialState)
  
  return <div>
        {/* <AddValue/> */}
       UserName:{state.username}
       <br/><br/>
       <p>counter:{state.counter}</p>
       <br/><br/>
       <p>status:{state.status}</p>
       <br/><br/>
       <button type = "button" 
        onClick={()=>{
          dispatch({type:"increment"});
          }}>
          Increment</button>
       <br/><br/>
       <button type = "button" 
       onClick={()=>{
        dispatch({type:"decrement"});
       }}
       >Decrement</button>
  </div>;
}

export default AddValue;