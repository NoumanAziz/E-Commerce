import { shopDataReducerActionType } from "./shopDataReducerActionType";

const ISTATE = {
    isFetching : false,
    collection : null,
    error : undefined
}

const shopDataReducer = (state = ISTATE , action) =>{
    switch (action.type) {
        case (shopDataReducerActionType.FETCHING_START) :
            return({
                ...state,
                isFetching : true
            })

        case (shopDataReducerActionType.FETCH_COLLECTION_DATA_SUCCESS) :
            return({
                ...state,
                isFetching : false,
                collection : action.payload
            })

        case (shopDataReducerActionType.FETCHING_Collection_DATA_FAILURE) :
            return({
                ...state,
                isFetching : false,
                error : action.payload
            })
        default:
            return state;
    }
}

export default shopDataReducer