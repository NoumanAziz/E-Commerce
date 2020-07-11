import React from 'react';
import './Header.scss';
import crown from './crown.svg';
import { auth } from '../../../src/firebase/firebaseUtil';
import { Link , withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import CartIcon from '../../component/CartIcon/CartIcon';
import CartDropdown from '../../component/cart-dropdown/CartDropdown';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../redux/user/UserSelector';
import { selectHidden } from '../../redux/cartReducer/CartSelector';
import { Icon  , Dropdown , Button} from 'semantic-ui-react'
import CustomButton from '../../component/CustomButton/CustomButton';



const Header = ({currentUser , hidden ,history }) => {
    console.log('header object', history)
    return (
        
        <div className = 'header-body'>

         
            <Link to = '/' className = 'crown-logo'>
            <img src = {crown} alt = 'crown logo' />
            </Link>
          
            <div className = 'links'>
                <Link to = '/shop'  className='option'   >
                    <p><Icon name = 'medrt' />Shop</p>
                </Link>
                <CartIcon/>
               
                <div className = 'display-name-image'>
                {currentUser ? <div className = 'display-image'>
                    <img src = {`${currentUser.photoURL}`} width = '27px' height = '27px'  alt = 'profile' /></div>
                : null }
                <Dropdown
                        simple item
                        
                            text= { currentUser ?`${currentUser.displayName}`  :"Account"}
                            icon=  {currentUser ? '' :"user"}
                        direction="left"
                        labeled
                        button
                        className= {currentUser ? 'custom-style' :"icon"}
                        
                    >
                    <Dropdown.Menu > 
                        <Dropdown.Header content="Welcome to Crown Shop" />
                        {
                            currentUser ? 
                            null
                            : 
                            <Dropdown.Item > 
                            <Button compact color = 'grey' onClick ={()=>history.push('/signin')}>Login</Button>
                            <Button compact color = 'grey' onClick ={()=>history.push('/signin')}>Signup</Button>
                            </Dropdown.Item>
                        }
                        <Dropdown.Item onClick ={()=>history.push('/wishlist')}><Icon name = 'heart outline' />Wishlist</Dropdown.Item>
                        <Dropdown.Item onClick ={()=>history.push('/checkout')}><Icon name = 'cart' />Cart</Dropdown.Item>
                       {
                            currentUser?
                            <>
                            <Dropdown.Item ><Icon name = 'nintendo switch'/>Switch Account</Dropdown.Item>
                            <Dropdown.Item  onClick={() => auth.signOut()}  ><Icon name = 'sign-out' flipped = 'horizontally'/>Logout</Dropdown.Item>
                            </>
                            : null
                        }
                </Dropdown.Menu>
            </Dropdown>

               
                </div>
          
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
export default withRouter(connect(mapStateToProps)(Header));




// const mapStateToProps = (state)=>({
//     currentUser : state.user.currentUser,
//     hidden : state.cart.hidden
// })

//or this method 


//const mapStateToProps = ({user : {currentUser} , cart : {hidden}})=>({
    //     currentUser ,
    //     hidden
    // })






    // <Link to = '/wishlist' className = 'option'>
    //                 <p><Icon name = 'heart outline' />Wishlist</p>
    //             </Link>
               
    //             <CartIcon/>
            
    //             {currentUser ? 
    //             <div className= 'sign-in'>
                   
    //                 <p className = "option">{currentUser.displayName}</p>
    //                 <img src = {`${currentUser.photoURL}`} width = '28px' height = '28px'  alt = 'profile' />
    //                 <div className='option' onClick={() => auth.signOut()} >Logout</div>
    //             </div>
    //             : 
    //             <Link to = '/signin'  className='option' >
    //             <p>Account</p>
    //             </Link>
    //              }

               
    //         </div>

         