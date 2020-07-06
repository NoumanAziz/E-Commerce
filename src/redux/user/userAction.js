import { userActionType } from "./userActionType"

export const setCurrentUser = (user) =>{
    console.log('in Action', user)
    return {
        type : userActionType.SET_CURRENT_USER,
        payload : user
    }
}
