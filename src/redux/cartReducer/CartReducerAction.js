import { CartReducerActionType } from "./CartReducerActionType";


export const CartReducerAction = () => (
    {
        type : CartReducerActionType.Cart_TOGGLER 
    }
)

export const CartHide = () => (
    {
        type : CartReducerActionType.CART_HIDE 
    }
)

export const AddItems = (items , qty)=>(
    {
        type : CartReducerActionType.ADD_ITEMS,
        payload : items,
        qty : qty
    }
)

export const RemoveItem = (id)=>(
    {
        type : CartReducerActionType.REMOVE_ITEM,
        payload : id
    }
)

export const SelectedItems = (selecteditems)=>(
    {
        type : CartReducerActionType.SELECTED_ITEMS,
        payload : selecteditems
    }
)

export const decreaseQuantity = (id)=>(
    {
        type : CartReducerActionType.DECREASE_QUANTITY,
        payload : id
    }
)
export const increaseQuantity = (id)=>(
    {
        type : CartReducerActionType.INCREASE_QUANTITY,
        payload : id
    }
)