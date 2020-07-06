import React from 'react';
import {ReactComponent as Shopingicon } from '../../Pages/Header/shopping-bag.svg'
import './CartIcon.scss';
import { connect }  from 'react-redux'
import { CartReducerAction} from '../../redux/cartReducer/CartReducerAction';
import { selectCartItemsCount } from '../../redux/cartReducer/CartSelector';

const CartIcon = ({cartToggler , itemCount}) => {
    return (
        <div className = 'cart-icon' onClick = {cartToggler}  > 
            <Shopingicon className = 'shopping-icon'  />
            <span className = 'item-count'>{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    cartToggler : ()=>dispatch(CartReducerAction())
})

const mapStateToProps = state => {
    console.log('in map state prop')
    return{
    itemCount : selectCartItemsCount(state)
}}

// we can do by this method bt the best method is selector method to void rendering 
// const mapStateToProps = ({cart:{cartItems} })=>({
//     itemCount : cartItems.reduce((acc , item)=> acc+item.quantity,0)
// }
// )

export default connect(mapStateToProps , mapDispatchToProps)(CartIcon);