import { SnackBarReducerActionType } from "./SnackBarReducerActionType";


const message = {
    cart : 'Item Added to CART',
    remCart : 'Item Removed from CART',
    wishlist : 'Item Added to WISHLIST',
    remWishlist : 'Item Removed from WISHLIST'
}

export const showSnackbar = (name)=>({
    type : SnackBarReducerActionType.SHOW_SNACKBAR,
    payload : message[name]
})

export const hideSnackbar = ()=>({
    type : SnackBarReducerActionType.HIDE_SNACKBAR,
})