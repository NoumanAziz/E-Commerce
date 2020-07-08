
import { CartReducerActionType } from "./CartReducerActionType";
import { CheckQuantity } from "./CheckQuantity";

const ISTATE = {
    hidden : true,
    cartItems : [],
    selectedItems : []
};

const CartReducer = (state = ISTATE , action) => {
    switch (action.type) {
        case CartReducerActionType.Cart_TOGGLER:
            return{
              ...state,
                hidden : !state.hidden
            }
        case CartReducerActionType.CART_SHOW:
            return{
              ...state,
                hidden : false
            }

        case CartReducerActionType.CART_HIDE:
            return{
              ...state,
                hidden : true
            }
            case CartReducerActionType.ADD_ITEMS:
            return{
                ...state,
                cartItems : CheckQuantity(state.cartItems , action.payload, action.qty)
            }
            
            case CartReducerActionType.REMOVE_ITEM:
                return{
                    ...state ,
                    cartItems : state.cartItems.filter(item=> item.id !== action.payload)
            }

            case CartReducerActionType.PAYMENT_SUCCESS:
                return{
                    ...state ,
                    cartItems : state.cartItems.filter(item=> !state.selectedItems.includes(item))
            }
                
            case CartReducerActionType.SELECTED_ITEMS:
                return{
                    ...state ,
                    selectedItems : action.payload
            }
            
            case CartReducerActionType.INCREASE_QUANTITY:
                return{
                    ...state ,
                    cartItems : state.cartItems.map(
                        item => item.id === action.payload ? 
                        {...item , quantity : item.quantity +1 } 
                        : item )
            }

            case CartReducerActionType.DECREASE_QUANTITY:
                return{
                    ...state ,
                    cartItems : state.cartItems.map(
                        item => item.id === action.payload ? 
                        {...item , quantity : item.quantity > 1 ? item.quantity -1 : item.quantity } 
                        : item )
            }
                
        default:
            return state;
    }
};

export default CartReducer;