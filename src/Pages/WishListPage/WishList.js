import React from 'react';

import CustomButton from '../../component/CustomButton/CustomButton';
import {createStructuredSelector} from 'reselect'
import { selectWishList } from '../../redux/WishList/WishListSelector';
import { connect } from 'react-redux'
import WishlistCard from '../../component/Wishlist Card/WishlistCard';
import './WishList.scss'


const WishList = ({wishlistItems}) => {
    return (
    
        <div className = 'wishlist'>
            <h1>Wishlist</h1>
      
            <div className = 'wishlist-items'>
                {wishlistItems.map(item => <WishlistCard key = {item.id} item = {item} 
                //  removeIcon={removeIcon} decQuantity ={ decQuantity } addQuantity ={addQuantity }
                />)}
            </div>
            <CustomButton >Go to Cart</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    wishlistItems : selectWishList
})

export default connect(mapStateToProps)(WishList);