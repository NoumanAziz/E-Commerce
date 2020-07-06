import { createSelector } from 'reselect';

const selectList = state => state.wishList; 

export const selectWishList = createSelector(
    [selectList],
    (wishList => wishList.wishlistItems)
)
