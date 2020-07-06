import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import CartReducer from './cartReducer/CartReducer';
import WishListReducer from './WishList/WishListReducer';



const rootReducer =  combineReducers({
    user : userReducer,
    cart : CartReducer,
    wishList : WishListReducer
});

export default rootReducer;