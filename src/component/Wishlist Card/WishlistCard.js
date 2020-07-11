import React from 'react';
import './WishlistCard.scss';
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems } from '../../redux/cartReducer/CartSelector';
import { increaseQuantity, decreaseQuantity, AddItems, SelectedItems } from '../../redux/cartReducer/CartReducerAction';
import {withRouter} from 'react-router-dom'
import { removeFromWishlist, increaseQty, decreaseQty } from '../../redux/WishList/WishListReducerAction';
import { Button, Icon } from 'semantic-ui-react'
import { showSnackbar } from '../../redux/SnackBarReducer/SnackBarReducerAction';

const WishlistCard = ({item , cartItems ,remove, increaseQty ,showSnackbar, decreaseQty, decWishlistQty, incWishlistQty ,
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
         
               <img src = {`${imageUrl}`} alt='item' width = '100px' height = '120px' />
               
           <div className = 'content'>
            <h3 className= 'title'>{name}</h3>
            <p>Price :{price}$</p>
            <div className = 'quantity'> 
            Quantity : 
                <div onClick = {()=>decQty(id)} >&#10094;</div> 
                    {quantity} 
                <div onClick = {()=> incQty(id)}>&#10095;</div> 
            </div>
            </div>
            <div className = 'wishlist-buttons'>
            <div className = 'extra-div' >
            <Button className = 'buttons-task' compact  icon labelPosition='right' onClick = {()=> {remove(id); showSnackbar('remWishlist')}}>
            <Icon name='heart outline' color= 'red'/>
                Remove
            </Button>
            </div>
            <div className = 'cart-buynow'>
            
            {cartItems.filter(item=>item.id===id).length ?
            <div className = 'extra-div'>
                <Button className = 'buttons-task'   compact icon labelPosition='right'  onClick = {()=>history.push('/checkout')}>
                 Go to
                 <Icon name='cart' />
                </Button>
          </div> :
            <div className = 'extra-div'>
                <Button className = 'buttons-task' compact  icon  labelPosition='right'  onClick = {()=> {addToCart(item , item.quantity); showSnackbar('cart')}}>
                 Add to
                 <Icon name='cart' />
                </Button>
            </div>
            }
            <div className = 'extra-div'>
            <Button className = 'buttons-task' compact  icon labelPosition='left' onClick = {()=>payment([item])}>
            <Icon name='dollar sign'/>
                Buy Now
            </Button>
            </div>
            </div>
          
           </div>
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
      proceedPayment: item=>dispatch(SelectedItems(item)),
      showSnackbar : msg=>dispatch(showSnackbar(msg))
    })
export default withRouter(connect(mapStateToProps , mapDispatchToProps)(WishlistCard));