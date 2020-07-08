import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import { paymentSuccess } from '../../redux/cartReducer/CartReducerAction';
import {withRouter} from 'react-router-dom'

const StripePayment = ({totalPrice,dispatch , history}) => {
    const totalStripePrice  = totalPrice *100;
    const  my_PUBLISHABLE_stripekey = 'pk_test_51H2Wm5Bs1vcqmDEXWoYMhcqlLgg5D8zGVqU1o0GOkX0a3iPrencpDiHLnyxQiQP3qrXWGcr9Wb2iswTr64q3Pg6j004yANvqQ3'
    const onToken = () =>{
        alert('Payment Successful !!! Thanks for shoping with us')
        dispatch(paymentSuccess())
        history.push('/')
    }
    return (
        <div>
        <StripeCheckout
        token={onToken}
        stripeKey = {my_PUBLISHABLE_stripekey}
        label = 'Pay Now'
        name = 'Crown Clothing Ltd.'
        image = 'https://sendeyo.com/up/d/f3eb2117da'
        billingAddress
        shippingAddress
        description = {`your total price is $${totalPrice}`}
        amount = {totalStripePrice}
        panelLabel = 'Pay Now'
        />
        </div>
    );
};



export default withRouter(connect(null)(StripePayment));