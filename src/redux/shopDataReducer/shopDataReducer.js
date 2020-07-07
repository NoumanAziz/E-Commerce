import SHOP_DATA from "../../Pages/ShopPage/Shop_Data";

const ISTATE = {
    collection : SHOP_DATA
}

const shopDataReducer = (state = ISTATE , action) =>{
    switch (action.type) {
        default:
            return state;
    }
}

export default shopDataReducer