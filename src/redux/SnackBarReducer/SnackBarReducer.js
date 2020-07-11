const { SnackBarReducerActionType } = require("./SnackBarReducerActionType");


const Istate = {
    snackbarShow : false,
    snackbarMessage : ''
}

const snackbarReducer = (state = Istate , action)=>{
    switch (action.type) {
    //     case SnackBarReducerActionType.ITEM_ADDED_TO_CART:
    //         return {
    //             snackbarShow: true,
    //             snackbarMessage : 'Item Added to CART'
    //         }

    //         case SnackBarReducerActionType.ITEM_REMOVED_FROM_CART:
    //             return {
    //                 snackbarShow: true,
    //                 snackbarMessage : 'Item Removed from CART'
    //             }


    //       case SnackBarReducerActionType.ITEM_ADDED_TO_WISHLIST:
    //         return {
    //             snackbarShow: true,
    //             snackbarMessage : 'Item Added to WISHLIST'
    //         }


    //   case SnackBarReducerActionType.ITEM_REMOVED_FROM_WISHLIST:
    //         return {
    //             snackbarShow: true,
    //             snackbarMessage : 'Item Removed from WISHLIST'
    //         }
            
    case SnackBarReducerActionType.SHOW_SNACKBAR:
        return {
            snackbarShow: true,
            snackbarMessage: action.payload
       }
        
        case SnackBarReducerActionType.HIDE_SNACKBAR:
            return {
                snackbarShow: false,
                snackbarMessage:''
           }
        default:
            return state;
    }
} 

export default snackbarReducer;

