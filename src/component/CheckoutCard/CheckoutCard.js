import React from 'react';
import './CheckoutCard.scss'




const CheckoutCard = ({item, removeIcon , selectItem ,unSelectItem ,addQuantity , decQuantity }) => {
    const {id ,name, imageUrl, price , quantity} = item;
    return (
        <div className = 'main-card'>
           <input type = 'checkbox' onChange = {(e)=>
            e.target.checked ? selectItem(item): 
                              unSelectItem(id)} /> 
            <img src = {`${imageUrl}`} alt='item' width = '70px' height = '80px' />
            <h4 className= 'discription'>{name}</h4>
            <div className = 'quantity'> 
                <div onClick = {()=>decQuantity(id)} >Rem</div> 
                    {quantity} 
                <div onClick = {()=>addQuantity(id)}>Add</div> 
            </div>
            <p>{price}$</p>
            <p onClick = {()=> removeIcon(id)}>Remove</p>

            </div>
    );
};



export default CheckoutCard;