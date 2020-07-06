import React from 'react';
import './WishlistCard.scss';
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems } from '../../redux/cartReducer/CartSelector';
import { increaseQuantity, decreaseQuantity, AddItems, SelectedItems } from '../../redux/cartReducer/CartReducerAction';
import {withRouter} from 'react-router-dom'
import { removeFromWishlist, increaseQty, decreaseQty } from '../../redux/WishList/WishListReducerAction';

const WishlistCard = ({item , cartItems ,remove, increaseQty , decreaseQty, decWishlistQty, incWishlistQty ,
                        proceedPayment , addToCart , history }) => {
    const {id ,name, imageUrl, price , quantity} = item;
    const incQty = (id)=>{
        incWishlistQty(id)
        increaseQty(id)
    }
    const decQty = (id)=>{
        decWishlistQty(id)
        decreaseQty(id)
    }
    const payment= (item)=>{
        proceedPayment(item)
        history.push('/procedpayment')
    }
    return (
        <div className = 'wishlist-card'>
           <img src = {`${imageUrl}`} alt='item' width = '140px' height = '170px' />
           <div className = 'content'>
            <h4 className= 'title'>{name}</h4>
            <p>{price}$</p>
            <div className = 'quantity'> 
                <div onClick = {()=>decQty(id)} >Rem</div> 
                    {quantity} 
                <div onClick = {()=> incQty(id)}>Add</div> 
            </div>
            </div>
            {cartItems.filter(item=>item.id===id).length ?
            <div onClick = {()=>history.push('/checkout')}>Go to cart</div> :
            <div onClick = {()=> addToCart(item , item.quantity)}>Add to Cart</div>
            }
            <div onClick = {()=>payment(item)}>BuyNow</div>
            <div onClick = {()=> remove(id)}>Remove</div>
           
            </div>
    );
};



    const mapStateToProps = createStructuredSelector({
        cartItems : selectCartItems,
    })

    const mapDispatchToProps = dispatch =>({
          addToCart : (item, qty)=>dispatch(AddItems(item , qty)),
        increaseQty : id=>dispatch(increaseQuantity(id)),
        decreaseQty : id=>dispatch(decreaseQuantity(id)),
             remove : id=>dispatch(removeFromWishlist(id)),
      incWishlistQty: id=>dispatch(increaseQty(id)),
      decWishlistQty: id=>dispatch(decreaseQty(id)),
      proceedPayment: item=>dispatch(SelectedItems(item))
    })
export default withRouter(connect(mapStateToProps , mapDispatchToProps)(WishlistCard));