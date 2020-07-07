import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectCollectionData = createSelector(
    [selectShop],
    (shop=>shop.collection)
)

export const selectShopData = createSelector(
    [selectCollectionData],
    collection=>Object.values(collection)
)
 
export const selectColletion = paramUrl=>(
    createSelector(
        [selectCollectionData],
        (collection=>collection[paramUrl])
    )
)