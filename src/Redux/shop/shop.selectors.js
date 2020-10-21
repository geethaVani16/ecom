import { createSelector } from 'reselect'

const collection_Id_Map = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}


const selectShop = state => state.shop;


export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)


export const selectParticalCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => collections.find(collection => {
        return collection.id === collection_Id_Map[collectionUrlParam]})
)