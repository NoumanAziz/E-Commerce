import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSelectedItems } from '../../redux/cartReducer/CartSelector';
import StripePayment from '../StripePayment/StripePayment';
import PaymentItems from '../../Pages/Payment/PaymentItems';
import './ModalComponent.scss'

const ProceedPaymentModal = (WrappedComponent)=>({onClose })=>{ 

  
    return (
        
      <div>
        <Modal dimmer={'blurring'} open= {true} onClose={onClose}>
        
       
          <Modal.Content >
            <Modal.Description>
           <WrappedComponent onClose={onClose}/>
         
            </Modal.Description>
          </Modal.Content>
         
        </Modal>
      </div>
    )
  }


     

export default ProceedPaymentModal;



{/* <div className = 'proceed-payment'>
<h4>Product</h4>
<h4>Discription</h4>
<h4>Quantity</h4>
<h4>Price</h4>


<div className = 'paymentItems'>
{selectedItems.map(item => <PaymentItems key = {item.id} item = {item} />)}
</div>

</div>
<div className= 'total-amount'>
Total : {totalPrice} $
</div> 
 <div onClick = {onClose}>
 <StripePayment className = 'stripe-payment-button' totalPrice = {totalPrice}/>
 </div> */}
//  const totalPrice =   selectedItems.reduce((acc ,item)=> acc+(item.quantity *item.price) ,0);


// const mapStateToProps = createStructuredSelector({
//   selectedItems : selectSelectedItems
// })