import React from 'react';
import { connect } from 'react-redux'

import './CartItemCard.scss';
import { RemoveItem} from '../../redux/cartReducer/CartReducerAction';
import { showSnackbar } from '../../redux/SnackBarReducer/SnackBarReducerAction';


const CartItemCard = ({item  ,removeItem,showSnackbar }) => {
    const {id, name, imageUrl, price , quantity} = item

  
    return (
        <div className = 'card'>
            <img src = {`${imageUrl}`} alt='item' width = '70px' height = '80px' />
            <div className = 'content'>
                <h4 className= 'name'>{name}</h4>
                <div className = 'content-info'>
                <p>{quantity}</p>
                    <p> x {price}$</p>
                    <p> = {price * quantity}$</p>
                </div>
            </div>
            <p onClick={()=>{removeItem(id); showSnackbar('remCart')}}>&#10005;</p>
        </div>
    );
};

const mapDispatchToProps = dispatch=>({
 removeItem : id=>dispatch(RemoveItem(id)),
 showSnackbar : msg=>dispatch(showSnackbar(msg))
})

export default connect(null , mapDispatchToProps)(CartItemCard);