import React from 'react';
import './CartItemCard.scss';

const CartItemCard = ({item}) => {
    const { name, imageUrl, price , quantity} = item
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
        </div>
    );
};

export default CartItemCard;