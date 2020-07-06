import { createSelector } from 'reselect';

 const selectCart = state => state.cart

export const selectCartItems = createSelector (
    [selectCart], 
    cart => cart.cartItems 
    );
export const selectSelectedItems  = createSelector(
    [selectCart],
    (cart=>cart.selectedItems)
)
export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce( (acc , item)=> acc+item.quantity ,0 )
    
    )

