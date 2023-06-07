
import { useReducer, useState } from 'react';
import styless from './UserInfo.module.scss'
import reducerFun, { initialUserState } from '../store/reducerFun';

const UserInfo=()=>{

const [state, dispatch] = useReducer(reducerFun,initialUserState)

const[userName,setUserName] = useState('')

const submitData = ()=>{
    console.log('state',state);
    
}

const [company,setCompany] = useState('')

const setCompanyName = (e:any) =>{
    if(e.target.value === userName){

        alert('company name can not be same as userName')
        return
    }
    setCompany(e.target.value)

}

// const [Age, setAge] = useState('')




const userDispatchFun = (newName:any) =>{

    dispatch({type: 'setUserName', payload:{newName}})

}

const AgeDispatchFun = (newAge:any) =>{

    dispatch({type: 'setUserAge', payload:{newAge}})

}

const companyDispatchFun = (newCompany:any) =>{

    dispatch({type: 'setUserCompany', payload:{newCompany}})

}

return(
    <div className= {styless['wrapper']}>

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
        value={state.userAge} 
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