import React from 'react';
import './CheckoutCard.scss'




const CheckoutCard = ({item, removeIcon , selectItem ,unSelectItem ,addQuantity , decQuantity,showSnackbar }) => {
    const {id ,name, imageUrl, price , quantity} = item;
    return (
        <div className = 'main-card'>
           <input type = 'checkbox' onChange = {(e)=>
            e.target.checked ? selectItem(item): 
                              unSelectItem(id)} /> 
            <img src = {`${imageUrl}`} alt='item' width = '70px' height = '80px' />
            <h3 className= 'discription'>{name}</h3>
            <div className = 'quantity'> 
                <div className = 'arrow' onClick = {()=>decQuantity(id)} >&#10094;  </div> 
                     { quantity } 
                <div className = 'arrow' onClick = {()=>addQuantity(id)}>  &#10095;</div> 
            </div>
            <h5>{price}$</h5>
            <p onClick = {()=>{ removeIcon(id); showSnackbar('remCart')}}>&#10005;</p>

            </div>
    );
};



export default CheckoutCard;