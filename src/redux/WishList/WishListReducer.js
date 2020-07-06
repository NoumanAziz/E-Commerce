import {WishListReducerActionType } from "./WishListReducerActionType";

const ISTATE = {
    wishlistItems : []
}

const WishListReducer = (state = ISTATE , action )=>{

    switch (action.type) {
        case WishListReducerActionType.ADD_TO_WISHLIST:
            return {
                ...state,
                wishlistItems : [...state.wishlistItems , {...action.payload , quantity:1}]
            }
        case WishListReducerActionType.REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlistItems : state.wishlistItems.filter(items=>items.id !== action.payload)
            }
        case WishListReducerActionType.INCREASE_QTY:
            return{
                ...state ,
                wishlistItems : state.wishlistItems.map(
                    item => item.id === action.payload ? 
                    {...item , quantity : item.quantity +1 } 
                    : item )
        }
        
        case WishListReducerActionType.DECREASE_QTY:
            return{
                ...state ,
                wishlistItems : state.wishlistItems.map(
                    item => item.id === action.payload ? 
                    {...item , quantity : item.quantity > 1 ? item.quantity -1 : item.quantity } 
                    : item )
        }

        default:
            return state;
    }

} 
export default WishListReducer;