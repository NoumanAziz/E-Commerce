import React ,{Component} from 'react';
import './Checkout.scss';
import { connect } from 'react-redux'

import {createStructuredSelector} from 'reselect'
import { selectCartItems } from '../../redux/cartReducer/CartSelector';
import CheckoutCard from '../../component/CheckoutCard/CheckoutCard';
import CustomButton from '../../component/CustomButton/CustomButton'
import {SelectedItems, RemoveItem ,  AddItems, decreaseQuantity, increaseQuantity} from '../../redux/cartReducer/CartReducerAction'
import { Icon } from 'semantic-ui-react';
import { showSnackbar } from '../../redux/SnackBarReducer/SnackBarReducerAction';

class Checkout extends Component {
     state = {
        selectItemArray  : [] 
     }
     
 componentWillReceiveProps(nextprops){
     if(this.props.cartItems !== nextprops.cartItems){
        console.log('important sELECT',this.state.selectItemArray)
        console.log('important THIS STATE CART',   this.props.cartItems )
        console.log('important NEXT STATE CART', nextprops.cartItems )

        let newArray =   this.state.selectItemArray.map
            (item=> nextprops.cartItems.map(cartitem => (cartitem.id === item.id ? cartitem : []))).flat(4);
            this.setState({selectItemArray : newArray})
        }
 }    

render() {
        const {cartItems , sendSelectItems , removeIcon ,addQuantity , decQuantity,showSnackbar } = this.props;

        const selectItems = (item) =>{
            this.setState ({selectItemArray : [...this.state.selectItemArray, item ]}, 
                ()=> console.log('selected items....   ', this.state.selectItemArray)
                )
           
        }
        const unSelectItems = (id) =>{
            this.setState({ selectItemArray : this.state.selectItemArray.filter(item => item.id !== id)},
                ()=>  console.log('unselected afterselected items....   ',this.state.selectItemArray)
            )
          
        }

        const proceedToPayment = () =>{
            if(this.state.selectItemArray.length>0){
                sendSelectItems(this.state.selectItemArray)  
            this.props.history.push("/procedpayment" )
            } else {
                alert('Select Items to Proceed');
            }
        }

    return (
        <div className = 'check-body'>
           <div className= 'cart-title'>
           <h3>Cart <Icon className = 'cart-title-icon' name = 'opencart' size ='large'/></h3>
           
           </div>
            <div  className = 'check-header'>
            <h4>Select</h4>
            <h4>Product</h4>
            <h4>Discription</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
            <h4>Remove</h4>
            </div>
      
        <div className = 'cartItems'>
            {cartItems.map(item => <CheckoutCard key = {item.id} item = {item} 
             selectItem = {selectItems} unSelectItem = {unSelectItems} removeIcon={removeIcon } showSnackbar ={showSnackbar}
             decQuantity ={ decQuantity } addQuantity ={addQuantity }
             />)}
        </div>
        
        
        
            <div  className= 'amount-total'>Total : {this.state.selectItemArray ? 
            this.state.selectItemArray.reduce((acc ,item)=> acc+(item.quantity *item.price) ,0): 0
            } 
            $</div>
           
        <div className = 'proceed-to-payment'>
        <CustomButton onClick = {()=>proceedToPayment()}>Proceed to Payment</CustomButton>
        </div>
        
        </div>

   
    );
}}





const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})
const mapDispatchToProps = dispatch => ({
    removeIcon : (id)=>dispatch(RemoveItem(id)),
    addQuantity : (id)=> dispatch(increaseQuantity(id)),
    decQuantity : (id)=>dispatch(decreaseQuantity(id)),
    sendSelectItems : (item)=> dispatch(SelectedItems(item)),
    showSnackbar: msg=>dispatch(showSnackbar(msg))
})

export default connect(mapStateToProps , mapDispatchToProps)(Checkout);