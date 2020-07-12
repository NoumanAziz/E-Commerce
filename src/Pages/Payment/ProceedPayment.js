import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSelectedItems } from '../../redux/cartReducer/CartSelector';

import CustomButton from '../../component/CustomButton/CustomButton'
import PaymentItems from './PaymentItems';
import './ProceedPayment.scss'
import StripePayment from '../../component/StripePayment/StripePayment';
import ModalComponent from '../../component/ModalComponent/ModalComponent';


const ProceedPayment = ({selectedItems, onClose}) => {
    const totalPrice =   selectedItems.reduce((acc ,item)=> acc+(item.quantity *item.price) ,0);
    return (
            <>
            <div className='proceed-payment-header'>Invoice</div>
            <div className = 'proceed-payment'>
                <h4>Product</h4>
                <h4>Discription</h4>
                <h4>Quantity</h4>
                <h4>Price</h4>
                
                </div>
            <div className = 'paymentItems'>
                {selectedItems.map(item => <PaymentItems key = {item.id} item = {item} />)}
            </div>
            
            
            <div className= 'total-amount'>
                <h2>Total : {totalPrice} 
                $</h2>
                <div onClick = {onClose}>
                <StripePayment totalPrice = {totalPrice}/>
                </div>
            </div> 
        
    
            </>
    );
};

const mapStateToProps = createStructuredSelector({
    selectedItems : selectSelectedItems
})

export default ModalComponent(connect(mapStateToProps)(ProceedPayment));