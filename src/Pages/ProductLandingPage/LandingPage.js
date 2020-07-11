import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './LandingPage.scss'
import { selectCartItems } from '../../redux/cartReducer/CartSelector'
import { AddItems, SelectedItems, increaseQuantity, decreaseQuantity } from '../../redux/cartReducer/CartReducerAction'
import { selectShopData } from '../../redux/shopDataReducer/shopDataSelector'
import { Button, Icon } from 'semantic-ui-react'
import { AddToWishlist, removeFromWishlist } from '../../redux/WishList/WishListReducerAction'
import { selectWishList } from '../../redux/WishList/WishListSelector'
import { showSnackbar } from '../../redux/SnackBarReducer/SnackBarReducerAction'


 class LandingPage extends Component {
    state = {
        quantity : 1
    }
      
    render() {
        const {match , history , location , cartItems , addToCart, incQty ,decQty ,addToSelected,collection ,wishListItems,addWishlist , removeWishlistitem ,showSnackbar} = this.props
        const reqData=collection.filter(item => item.title === location.state)[0].items.filter(item => item.id == match.params.id)[0];
        const {quantity} = this.state
        console.log('required dtata', reqData)
        const {id , name , imageUrl ,  price } = reqData;
        const increase = (id)=>{
            this.setState({quantity: quantity+1})
            incQty(id)
        }
        const decrease = (id)=>{
            if(quantity > 1){
                this.setState({quantity: quantity-1})
            }
            decQty(id)
        }
        const payment = (item)=>{
            addToSelected(item)
            history.push("/procedpayment")
        }

        return (
            <div className = 'landing-Page'>
                {/* {this.state.collection.filter(item => item.title === location.state)
                [0].items.map(item => 
                item.id == match.params.id ? 
                <div>Matched</div>
                :null
                )} */}
               <div className = 'bread-crumb'> 
               <h2 onClick = {()=>history.push(`/`)}>
                    Home
                </h2>
               <h2 onClick = {()=>history.push(`/shop`)}>
                    Shop
                </h2>
                <h2 onClick = {()=>history.push(`/shop/${location.state.toLowerCase()}`)}>
                    {location.state}
                </h2>
                </div>


                <div className = 'data-info'>
                    <img src = {`${imageUrl}`} alt ="item" />
                    <div className = "content">
                        <div className = 'information'>
                            <h2>{name}</h2>
                            <div className = 'price-qty'>
                                <p>Price : {price}</p>
                                <div className = 'qty'>
                                    Quantity : 
                                    <div onClick = {()=>decrease(id)}>&#10094;</div>
                                    {quantity}
                                    <div onClick = {()=>increase(id)}>&#10095;</div>
                                </div>
                            </div>
                            <div className = 'data-buttons'>
                            <div>
                                {cartItems.filter(item=>item.id===id).length ? 
                                <Button className= 'landing-page-buttons'  icon  labelPosition='right'  onClick ={()=>history.push('/checkout')}>
                                Open
                                <Icon name='opencart' size = 'large' />
                                </Button>
                                :
                                <Button className= 'landing-page-buttons'  icon  labelPosition='right'  onClick ={()=>{addToCart(reqData , quantity);  showSnackbar('cart')}}>
                                    Add to
                                <Icon name='opencart' size = 'large' />
                                </Button>
                                }
                                </div>
                                <div>


                                {wishListItems.filter(item => item.id === id).length ?
                
                                <Button icon className= 'landing-page-buttons'  onClick ={() =>{ removeWishlistitem (id); showSnackbar('remWishlist')}}>
                                <Icon name='heart' color ='red'  />
                                </Button>
                            
                                :
                                
                                <Button icon className= 'landing-page-buttons' onClick ={() => {addWishlist (reqData); showSnackbar('wishlist')}}>
                                <Icon name='heart outline' color = 'red' />
                                </Button>
                                
                            }
                                </div>
                               <div>
                               <Button className= 'landing-page-buttons' icon labelPosition='left'onClick = {()=>payment([{...reqData , quantity:quantity}])}>
                                <Icon name='dollar sign'/>
                                    Buy Now
                                </Button>
                               </div>
                                
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>



            
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    collection : selectShopData,
    wishListItems : selectWishList
})
const mapDispatchToProps = dispatch =>({
    addToCart : (item,quantity)=>dispatch(AddItems(item,quantity)),
    addToSelected: item => dispatch(SelectedItems(item)),
    incQty : id=>dispatch(increaseQuantity(id)),
    decQty : id=>dispatch(decreaseQuantity(id)),
    addWishlist : items=>dispatch(AddToWishlist(items)),
    removeWishlistitem : id=>dispatch(removeFromWishlist(id)),
    showSnackbar: msg=>dispatch(showSnackbar(msg))
    
})

export default connect(mapStateToProps , mapDispatchToProps)(LandingPage);