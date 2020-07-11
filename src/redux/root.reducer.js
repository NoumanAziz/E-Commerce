import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import userReducer from './user/user.reducer';
import CartReducer from './cartReducer/CartReducer';
import WishListReducer from './WishList/WishListReducer';
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directoryReducer/directoryReducer';
import shopDataReducer from './shopDataReducer/shopDataReducer';
import snackbarReducer from './SnackBarReducer/SnackBarReducer';

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart' , 'wishList' ,'directory','shop','snackbar']

}

const rootReducer =  combineReducers({
    user : userReducer,
    cart : CartReducer,
    wishList : WishListReducer,
    directory : directoryReducer,
    shop : shopDataReducer,
    snackbar : snackbarReducer

});

export default  persistReducer(persistConfig, rootReducer);