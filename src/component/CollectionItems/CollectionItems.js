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


const CollectionItems = ({items,title , addItems ,cartItems, wishListItems ,removeWishlistitem , addWishlist, history}) => {
    const {id , name, imageUrl, price} = items
   const data = {pathname :`/product/${id}` , state : title}
    return (
      

            <div className = 'collection-item' >
              
            {/* <Link to = {`/shop/${id}`} className ='image' 
            style ={{ backgroundImage : `url(${imageUrl})`}}
            /> */}

            <div className ='image' onClick = {()=> history.push(data)}
            style ={{ backgroundImage : `url(${imageUrl})`}}
            />
            
            <div className ='collection-footer'>
                <span className ='name'>{name}</span>
                <span className ='price'>{price}$</span>
            </div>
            <div className = 'wish-list'>
            {wishListItems.filter(item => item.id === items.id).length ?
                <div  onClick ={() => removeWishlistitem (items.id)}>
                    remove from wishlist
                </div>
                :
                <div  onClick = { ()=>addWishlist (items)}>
                    wishlist
                </div>
            }
                </div>
                {cartItems.filter(item => item.id === items.id).length ?
                <CustomButton inverted={true}  onClick = {()=>history.push('/checkout')}>
                    Go to Cart
                </CustomButton>
                :
                <CustomButton inverted={true}  onClick = { ()=>addItems (items , 1)}>
                    Add to Cart
                </CustomButton>
                }
            
        </div>

       

    );
};

const mapDispatchToProps = dispatch=> ({
    addItems : (items , qty)=>dispatch(AddItems(items, qty)),
    addWishlist : items=>dispatch(AddToWishlist(items)),
    removeWishlistitem : id=>dispatch(removeFromWishlist(id))
})

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    wishListItems : selectWishList
})

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(CollectionItems));