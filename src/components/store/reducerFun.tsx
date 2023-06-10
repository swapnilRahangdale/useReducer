type userStateType = {
    userName: string,
    Age:number,
    company: string
}

type actionType = {
    type: string,
    payload: {
        newAge?: number,
        newName?: string,
        newCompany?: string,
    }
}
export const initialUserState:userStateType = {
    userName:"",
    Age: 5,
    company: ""

}

const reducerFun = (state:userStateType, action:any) =>{

    switch (action.type) {

        case 'setUserName':

       // console.log('action', action);
        
            
            return {
                ...state,
            userName : action.payload.newName
            };

            case 'setUserAge':

       // console.log('action', action);
        
            
            return {
                ...state,
            Age : action.payload.newAge
            };

            case 'setUserCompany':

          //  console.log('action', action);
            
                
                return {
                    ...state,
                company : action.payload.newCompany
                };
    
        default:
            return state
    }

};
export default reducerFun;