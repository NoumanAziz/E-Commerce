import React from 'react';
import { connect } from 'react-redux'
import CustomButton from '../CustomButton/CustomButton'
import './dropdown.scss'
import CartItemCard from './CartItemCard';
import { selectCartItems } from '../../redux/cartReducer/CartSelector';
import { withRouter } from 'react-router-dom'
import { CartHide } from '../../redux/cartReducer/CartReducerAction';
import { ClickOutsideListener } from 'react-click-outside-listener';


const CartDropdown = ({cartItems, history , handleClickOutside}) => {
    const checkOut = ()=>{
        history.push('/checkout')
        handleClickOutside()
    }
    return (
        <ClickOutsideListener  onClickOutside={ handleClickOutside }>
        <div className = 'cart-dropdown'  >
           { cartItems.length ? 
           <div className = 'cart-items' > 
            {cartItems.map(
                item => <CartItemCard key={item.id} item={item}/>
                )}
            </div>: 
            <div className = 'cart-message'>
                You Have No Items In Your Cart!!!
                </div>}
            <CustomButton  onClick = {checkOut} >Check Out</CustomButton>
        </div>
        </ClickOutsideListener>
    );
};

const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
})

const mapDispatchToProps = dispatch=>({
    handleClickOutside : ()=>dispatch(CartHide())
})

// const mapStateToProps = ({cart:{cartItems}}) =>({
//     cartItems
// })

export default  withRouter(connect(mapStateToProps , mapDispatchToProps)(CartDropdown));

