import {WishListReducerActionType} from "./WishListReducerActionType"

export const AddToWishlist = (item) =>({
    type : WishListReducerActionType.ADD_TO_WISHLIST,
    payload : item
})

export const removeFromWishlist = (id) =>({
    type : WishListReducerActionType.REMOVE_FROM_WISHLIST,
    payload : id
})

export const increaseQty = (id) => ({
    type : WishListReducerActionType.INCREASE_QTY,
    payload : id
})

export const decreaseQty = (id) => ({
    type : WishListReducerActionType.DECREASE_QTY,
    payload : id
})