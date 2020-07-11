import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectCollectionData = createSelector(
    [selectShop],
    (shop=>shop.collection)
)

export const selectShopData = createSelector(
    [selectCollectionData],
    collection=>collection ? Object.values(collection):[]
)
 
export const selectColletion = paramUrl=>(
    createSelector(
        [selectCollectionData],
        collection=>(collection?collection[paramUrl]: null)
    )
)

export const selectIsFetching = createSelector(
    [selectShop],
    (shop=> shop.isFetching)
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collection
)