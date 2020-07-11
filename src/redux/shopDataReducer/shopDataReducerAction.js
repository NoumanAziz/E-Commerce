import { shopDataReducerActionType } from "./shopDataReducerActionType"
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebaseUtil"

export const fetchingStarts = () =>({
    type : shopDataReducerActionType.FETCHING_START,
    
})

export const fetchingDataSuccess = (collection)=>({
    type : shopDataReducerActionType.FETCH_COLLECTION_DATA_SUCCESS,
    payload : collection
})

export const fetchingCollectionDataFailure = (error)=>({
    type: shopDataReducerActionType.FETCHING_Collection_DATA_FAILURE,
    payload : error
})

export const fetchingDataAsync = () => {
    return dispatch =>{
        const collectionRef =  firestore.collection('collections')
        dispatch(fetchingStarts());
        collectionRef.get().then(snapshot=> {
            const collectionMap = convertCollectionSnapshotToMap(snapshot)
            dispatch (fetchingDataSuccess(collectionMap))
        }).catch(error => dispatch(fetchingCollectionDataFailure(error)))
    } 
}

