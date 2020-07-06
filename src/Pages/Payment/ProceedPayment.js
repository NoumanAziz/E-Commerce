import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSelectedItems } from '../../redux/cartReducer/CartSelector';

import CustomButton from '../../component/CustomButton/CustomButton'
import PaymentItems from './PaymentItems';
import './ProceedPayment.scss'


const ProceedPayment = ({selectedItems}) => {
    return (
            <>
            <div className = 'proceed-payment'>
                <h4>Product</h4>
                <h4>Discription</h4>
                <h4>Quantity</h4>
                <h4>Price</h4>
                
          
            <div className = 'paymentItems'>
                {selectedItems.map(item => <PaymentItems key = {item.id} item = {item} />)}
            </div>
            
            </div>
            <div className= 'total-amount'>
                <div>Total : {
                selectedItems.reduce((acc ,item)=> acc+(item.quantity *item.price) ,0)
                } 
                $</div>
                <CustomButton >Stripe Payment</CustomButton>
            </div> 
    
    
            </>
    );
};

const mapStateToProps = createStructuredSelector({
    selectedItems : selectSelectedItems
})

export default connect(mapStateToProps)(ProceedPayment);