
export const initialUserState = {
    userName:'',
    Age: 0,
    company: ''

}

const reducerFun = (state:any, action:any) =>{

    switch (action.type) {

        case 'setUserName':

        console.log('action', action);
        
            
            return {
                ...state,
            userName : action.payload.newName
            };

            case 'setUserAge':

        console.log('action', action);
        
            
            return {
                ...state,
            Age : action.payload.newAge
            };

            case 'setUserCompany':

            console.log('action', action);
            
                
                return {
                    ...state,
                company : action.payload.newCompany
                };
    
        default:
            return state
    }

};
export default reducerFun;