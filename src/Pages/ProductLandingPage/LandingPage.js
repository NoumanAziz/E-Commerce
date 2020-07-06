import React, { Component } from 'react'
import SHOP_DATA from '../ShopPage/Shop_Data'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './LandingPage.scss'
import { selectCartItems } from '../../redux/cartReducer/CartSelector'
import { AddItems, SelectedItems, increaseQuantity, decreaseQuantity } from '../../redux/cartReducer/CartReducerAction'

 class LandingPage extends Component {
    state = {
        collection : SHOP_DATA,
        quantity : 1
    }
    
    render() {
        const {match , history , location , cartItems , addToCart, incQty ,decQty ,addToSelected } = this.props
        const reqData=this.state.collection.filter(item => item.title === location.state)[0].items.filter(item => item.id == match.params.id)[0];
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
            <div>
                {/* {this.state.collection.filter(item => item.title === location.state)
                [0].items.map(item => 
                item.id == match.params.id ? 
                <div>Matched</div>
                :null
                )} */}
                <h1 onClick = {()=>history.push(`/shop/${location.state.toLowerCase()}`)}>
                    Back to {location.state}
                </h1>
                <div className = 'data-info'>
                    <img src = {`${imageUrl}`} alt ="item" />
                    <div className = "content">
                        <div className = 'information'>
                            <h3>{name}</h3>
                            <p>{price}</p>
                            <div className = 'qty'>
                            <p onClick = {()=>increase(id)}>add</p>
                            <p>{quantity}</p>
                            <p onClick = {()=>decrease(id)}>rem</p>
                            </div>
                        </div>
                        <div className = 'data-buttons'>
                            {cartItems.filter(item=>item.id===id).length ? 
                            <p>Added to cart</p>:
                            <p onClick ={()=>addToCart(reqData , quantity)}>Add to cart</p>
                            }
                            <p onClick = {()=>payment([{...reqData , quantity:quantity}])}>Buy Now</p>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})
const mapDispatchToProps = dispatch =>({
    addToCart : (item,quantity)=>dispatch(AddItems(item,quantity)),
    addToSelected: item => dispatch(SelectedItems(item)),
    incQty : id=>dispatch(increaseQuantity(id)),
    decQty : id=>dispatch(decreaseQuantity(id))
    
})

export default connect(mapStateToProps , mapDispatchToProps)(LandingPage);