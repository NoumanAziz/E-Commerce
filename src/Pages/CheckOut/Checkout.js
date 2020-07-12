import React ,{Component} from 'react';
import './Checkout.scss';
import { connect } from 'react-redux'

import {createStructuredSelector} from 'reselect'
import { selectCartItems } from '../../redux/cartReducer/CartSelector';
import CheckoutCard from '../../component/CheckoutCard/CheckoutCard';
import CustomButton from '../../component/CustomButton/CustomButton'
import {SelectedItems, RemoveItem ,  AddItems, decreaseQuantity, increaseQuantity, checkAll, uncheckAll, checkItem, uncheckItem} from '../../redux/cartReducer/CartReducerAction'
import { Icon } from 'semantic-ui-react';
import { showSnackbar } from '../../redux/SnackBarReducer/SnackBarReducerAction';

import ProceedPayment from '../Payment/ProceedPayment';

class Checkout extends Component {
    constructor (props) {
        super(props);
     this.state = {
        selectItemArray  : [] ,
        paymentProceedModal : false,
        isChecked : false,
     }

     if (window.performance) {
        if (performance.navigation.type == 1) {
          this.props.uncheckAll();
        }
    }
    

    }
     
 componentWillReceiveProps(nextprops){
     if(this.props.cartItems !== nextprops.cartItems){
        let newArray =   this.state.selectItemArray.map
            (item=> nextprops.cartItems.map(cartitem => (cartitem.id === item.id ? cartitem : []))).flat(4);
            this.setState({selectItemArray : newArray})
        }
 }    


//  componentWillUnmount (){
//      this.props.uncheckAll();
//      console.log ('component will unmount')
//  }

 selectItems = (item) =>{
            this.setState ({selectItemArray : [...this.state.selectItemArray, item ]},
                ()=>this.props.checkItem(item.id))}

    unSelectItems = (id) =>{
        this.setState({ selectItemArray : this.state.selectItemArray.filter(item => item.id !== id),
            isChecked : false}, 
            ()=>this.props.uncheckItem(id))}

    onClose=()=>{
            this.setState({paymentProceedModal:false})
        }
    
    proceedToPayment = () =>{
        if(this.state.selectItemArray.length>0){
            this.props.sendSelectItems(this.state.selectItemArray)  
        // history.push("/procedpayment" )
            this.setState({paymentProceedModal : true})
        } else {
            alert('Select Items to Proceed');
        }
    }
    addCarttoSelect = ()=> {
        const newArray = [...this.props.cartItems]
        console.log('new array',newArray)
     this.setState({selectItemArray:[...newArray] , isChecked : true }, 
        ()=> this.props.checkAll())
    }
    emptySelect = () =>{
        this.setState({selectItemArray: [] ,isChecked:false  },()=>  this.props.uncheckAll())
      }


render() {
        const {cartItems , sendSelectItems , removeIcon ,addQuantity , decQuantity,showSnackbar , history} = this.props;
        const {selectItemArray ,paymentProceedModal ,isChecked} = this.state;
   
        // const cartItems = initialCartItems.map(item=>   ({...item , checked : false }) )
      

    return (
        <div className = 'check-body'>
           <div className= 'cart-title'>
           <h3>Cart <Icon className = 'cart-title-icon' name = 'opencart' size ='large'/></h3>
           
           </div>
            <div  className = 'check-header'>
            <div className = 'select-unselect'>
            <input type = 'checkbox'
            
            checked = {isChecked} 
             onClick = {(e)=>
            e.target.checked ? this.addCarttoSelect(): 
                              this.emptySelect()} />
             {isChecked? <h4>Unselect</h4>:<h4>Select</h4>} 
            </div>
            <h4>Product</h4>
            <h4>Discription</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
            <h4>Remove</h4>
            </div>
      
        <div className = 'cartItems'>
            {cartItems.map(item => <CheckoutCard key = {item.id} item = {item} 
             selectItem = {this.selectItems} unSelectItem = {this.unSelectItems} removeIcon={removeIcon } showSnackbar ={showSnackbar}
             decQuantity ={ decQuantity } addQuantity ={addQuantity } 
             />)}
        </div>
        
        
        
            <div  className= 'amount-total'>Total : {selectItemArray ? 
            selectItemArray.reduce((acc ,item)=> acc+(item.quantity *item.price) ,0): 0
            } 
            $</div>
           
        <div className = 'proceed-to-payment'>
        <CustomButton onClick = {()=>this.proceedToPayment()}>Proceed to Payment</CustomButton>
        </div>
        
            {
                paymentProceedModal? <ProceedPayment onClose = {this.onClose} description = {'Invoice'}/>:null
            }
        
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
    showSnackbar: msg=>dispatch(showSnackbar(msg)),

    checkAll : ()=>dispatch(checkAll()),
    uncheckAll : ()=>dispatch(uncheckAll()),
    checkItem : (id)=>dispatch(checkItem(id)),
    uncheckItem : (id)=>dispatch(uncheckItem(id)),

})

export default connect(mapStateToProps , mapDispatchToProps)(Checkout);