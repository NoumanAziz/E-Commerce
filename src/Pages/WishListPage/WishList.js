import React from 'react';

import { withRouter } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import { selectWishList } from '../../redux/WishList/WishListSelector';
import { connect } from 'react-redux'
import WishlistCard from '../../component/Wishlist Card/WishlistCard';
import './WishList.scss'
import { Button, Icon } from 'semantic-ui-react'

const WishList = ({wishlistItems , history}) => {
    return (
    
        <div className = 'wishlist'>
            <div className = 'wishlist-title'>
                <h2>Wishlist</h2>
            </div>
      
            <div className = 'wishlist-items'>
                {wishlistItems.map(item => <WishlistCard key = {item.id} item = {item} 
                //  removeIcon={removeIcon} decQuantity ={ decQuantity } addQuantity ={addQuantity }
                />)}
            </div>
            <div className = 'created-div'>
            <Button  icon className = "wishlist-buttons"  labelPosition='right' onClick = {()=>history.push('/checkout')}>
            <Icon name='opencart'/>
                Open
            </Button>
            </div>
            


        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    wishlistItems : selectWishList
})

export default withRouter( connect(mapStateToProps)(WishList));