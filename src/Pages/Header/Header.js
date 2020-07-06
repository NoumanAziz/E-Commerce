import React from 'react';
import './Header.scss';
import crown from './crown.svg';
import { auth } from '../../../src/firebase/firebaseUtil';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import CartIcon from '../../component/CartIcon/CartIcon';
import CartDropdown from '../../component/cart-dropdown/CartDropdown';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../redux/user/UserSelector';
import { selectHidden } from '../../redux/cartReducer/CartSelector';



const Header = ({currentUser , hidden}) => {
    console.log('header object', currentUser)
    return (
        
        <div className = 'header-body'>

         
            <Link to = '/' className = 'crown-logo'>
            <img src = {crown} alt = 'crown logo' />
            </Link>
          
            <div className = 'links'>
                <Link to = '/shop'  className='option'   >
                    <p>SHOP</p>
                </Link>
                <Link to = '/shop'  className='option'>
                    <p>CONTACT</p>
                </Link>
                {currentUser ? 
                <div className= 'sign-in'>
                    <div className='option' onClick={() => auth.signOut()} >Sign Out</div>
                    <p>{currentUser.displayName}</p>
                    <img src = {`${currentUser.photoURL}`} width = '28px' height = '28px'  alt = 'profile' />
                </div>
                : 
                <Link to = '/signin'  className='option' >
                <p>SIGN IN</p>
                </Link>
                 }

                <Link to = '/wishlist' className = 'option'>
                    <p>WISHLIST</p>
                </Link>
               
                <CartIcon/>
                {/* <img src = {cart} width = '28px' height = '28px' alt ='cart'  className='option'/> */}
               
            </div>
            {hidden ? null : 
            <CartDropdown/>}
         
        </div>
    
        
    );
};

// below methods are also same but we preffer to use selectors 

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})
export default connect(mapStateToProps)(Header);




// const mapStateToProps = (state)=>({
//     currentUser : state.user.currentUser,
//     hidden : state.cart.hidden
// })

//or this method 


//const mapStateToProps = ({user : {currentUser} , cart : {hidden}})=>({
    //     currentUser ,
    //     hidden
    // })