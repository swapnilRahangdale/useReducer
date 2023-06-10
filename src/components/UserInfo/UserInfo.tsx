
import { useEffect, useReducer, useRef, useState } from 'react';
import styless from './UserInfo.module.scss'
import reducerFun, { initialUserState } from '../store/reducerFun';
import DialogComp from '../DialogComp/DialogComp';
import ReactDOM from 'react-dom';

const UserInfo=()=>{
    
    const[divContent, setDivContent] = useState<any>();
    const[classKey,setClasskey] = useState<any>('yellowClass')
    const loadDialog = () => {
       // setTimeout(()=>{
     //setDivContent();  
       // },2500);

       setInterval(()=>{
        console.log('classkey',classKey);

        switch (classKey) {
            case 'redClass':
                  setClasskey('yellowClass')              
                break;

                case 'yellowClass':
                  setClasskey('redClass')              
                break;

                case 'grayClass':
                  setClasskey('yellowClass')              
                break;
        
            default:
                break;
        }
       
        
       },5000000)
    }


    useEffect(()=>{
        loadDialog();
    },[])

const [state, dispatch] = useReducer(reducerFun,initialUserState);

let AgeInputRef: any = useRef();
const dialogRef:any = useRef();

useEffect(()=>{
   
   
    console.log("AgeInput 1 ",AgeInputRef?.current?.value);
    
},[AgeInputRef?.current?.value])

const submitData = () => {
    if(dialogRef?.current.open){
        dialogRef?.current?.close()
      }else {
        dialogRef?.current?.showModal()
      }
       //dv.querySelector('#ptag').textContent = 'new text'
      console.log("dialogRef", dialogRef?.current);

      if (AgeInputRef?.current){
        console.log(AgeInputRef?.current);
        
      }
    
    
};

const renderId:any = document.getElementById("dialog-head")
const DialogRender = ReactDOM.createPortal(<DialogComp dialogRef={dialogRef} title="New Text Content" classKey={classKey}/>, renderId)

const userDispatchFun = (newName:any) =>{

    dispatch({type: 'setUserName', payload:{newName}})

}

const AgeDispatchFun = (newAge:any) =>{

    dispatch({type: 'setUserAge', payload:{newAge}})

}

const companyDispatchFun = (newCompany:any) =>{

    if(state.userName === newCompany){
        alert('company name can not be same as userName');
        return
    }

    dispatch({type: 'setUserCompany', payload:{newCompany}})

}

return(
    <div className= {styless['wrapper']}>
    {DialogRender}
<div className="dialog">

      
      </div>

         AgeInput.value : {AgeInputRef?.current?.value} <br/>
        <div className= {styless['form-control']}>
            <label htmlFor="UserName">UserName</label>
        <input type = "text" 
        name = "UserName" 
        value = {state.userName} 
        onChange={e => userDispatchFun(e.target.value) }
         id = "UserName" placeholder='Enter your Name'/>
        </div>
        
        <div className= {styless['form-control']}>
            <label htmlFor="Age">Age</label>
        <input type = "number" 
        name = "Age"
        value={state.Age} 
        ref = {AgeInputRef}
        onChange={e=> AgeDispatchFun(e.target.value)}
        id = "Age" placeholder='Enter your Age'/>
        </div>
        
        <div className= {styless['form-control']}>
        <label htmlFor="Company">Company</label>
        <input type = "text"
         name = "Company" 
         value = {state.company} 
         onChange = {e => companyDispatchFun(e.target.value)} 
         id = "Company" placeholder='Enter your Company Name'/>
        </div>
        
        <button type = "button" onClick={submitData}>Submit</button>
    </div>
)

};
export default UserInfo;