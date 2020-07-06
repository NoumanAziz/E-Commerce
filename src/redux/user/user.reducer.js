import { userActionType } from "./userActionType";

const INITIAL_STATE = {
    currentUser : null
}

const userReducer = (state = INITIAL_STATE , action) =>{

    switch (action.type) {
        case userActionType.SET_CURRENT_USER:
            console.log('reducerrrrr' , action.type , action.payload)
            return{
                ...state , 
                currentUser : action.payload
            }
            
        default:
            return state;
}
};

export default userReducer; 