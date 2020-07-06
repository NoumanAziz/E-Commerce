import React from 'react';
import './PaymentItems.scss'
const PaymentItems = ( {item:{id ,name, imageUrl, price , quantity}}) => {
    return (
        <div className = 'main-payment-card'>
           
            <img src = {`${imageUrl}`} alt='item' width = '90px' height = '100px' />
            <h4 className= 'discription-payment'>{name}</h4>
            <div className = 'quantity'> 
                {quantity} 
            </div>
            <p>{price}$</p>
            </div>
    );
};


export default PaymentItems;