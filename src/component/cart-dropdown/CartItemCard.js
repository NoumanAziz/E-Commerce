import React from 'react';
import { connect } from 'react-redux'

import './CartItemCard.scss';
import { RemoveItem} from '../../redux/cartReducer/CartReducerAction';


const CartItemCard = ({item  ,dispatch }) => {
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
            <button onClick={()=>dispatch(RemoveItem(id))}>X</button>
        </div>
    );
};



export default connect(null)(CartItemCard);