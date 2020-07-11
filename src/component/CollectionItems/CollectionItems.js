import React from 'react';
import { connect } from 'react-redux'
import CustomButton from '../CustomButton/CustomButton'
import {createStructuredSelector} from 'reselect'
import { AddItems } from '../../redux/cartReducer/CartReducerAction'
import {AddToWishlist , removeFromWishlist} from '../../redux/WishList/WishListReducerAction'
import './CollectionItems.scss';
import { selectCartItems } from '../../redux/cartReducer/CartSelector';
import {withRouter , Link} from 'react-router-dom'
import { selectWishList } from '../../redux/WishList/WishListSelector';
import { Icon } from 'semantic-ui-react'
import { showSnackbar } from '../../redux/SnackBarReducer/SnackBarReducerAction';





const CollectionItems = ({items,title ,showSnackbar , addItems ,cartItems, wishListItems ,removeWishlistitem , addWishlist, history}) => {
    const {id , name, imageUrl, price} = items
   const data = {pathname :`/shop/product/${id}` , state : title}
    const addToCart = (items)=>{
        console.log(items, 'items problem')
        addItems (items , 1)
        showSnackbar('cart')
    }

    return (
      

            <div className = 'collection-item' >
            <div className ='image' onClick = {()=> history.push(data)}
            style ={{ backgroundImage : `url(${imageUrl})`}}
            />
            
            <div className ='collection-footer'>
                <span className ='name'>{name}</span>
                <span className ='price'>{price}$</span>
            </div>
            <div className =  'cart-wishlist'>
            <div className = 'wish-list'>
            {wishListItems.filter(item => item.id === items.id).length ?
                <Icon name = 'heart'  size = 'big'
                     onClick ={() => {removeWishlistitem (items.id); showSnackbar('remWishlist')}}/>
                :
                <Icon name = 'heart outline'  size = 'big'
                            onClick = { ()=>{addWishlist (items);  showSnackbar('wishlist')}}/>
            }
                </div>
                
                {cartItems.filter(item => item.id === items.id).length ?
                <div className = 'cart-button'  onClick = {()=>history.push('/checkout')}>Open
                <Icon name='opencart' size='large' color = 'blue'></Icon>
                </div>
                :
                <div className = 'cart-button' onClick = {()=>addToCart(items)} >Add to
                <Icon  name='opencart' size='large'  color = 'black'  ></Icon>
                </div>
                }
    
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch=> ({
    addItems : (items , qty)=>dispatch(AddItems(items, qty)),
    addWishlist : items=>dispatch(AddToWishlist(items)),
    removeWishlistitem : id=>dispatch(removeFromWishlist(id)),
    showSnackbar : msg=>dispatch(showSnackbar(msg))

})

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    wishListItems : selectWishList,
    
})

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(CollectionItems));