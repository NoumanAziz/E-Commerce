import React from 'react';
import { Route, Switch , Redirect } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import './App.scss';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';
import { connect } from 'react-redux'
import { auth, createUserProfile} from '../src/firebase/firebaseUtil';
import { setCurrentUser } from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/UserSelector';
import Checkout from './Pages/CheckOut/Checkout';
import ProceedPayment from './Pages/Payment/ProceedPayment';
import CategoryPage from './Pages/CategoryPage/CategoryPage'
import WishList from './Pages/WishListPage/WishList';
import LandingPage from './Pages/ProductLandingPage/LandingPage';



class App extends React.Component {

unsubscribeFromAuth = null;

componentDidMount (){
  this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
  
    if (userAuth){
      const userRef = await createUserProfile(userAuth);
      userRef.onSnapshot( snapshot =>{
        console.log('snapshot in app', snapshot)
         this.props.setCurrentUser ({
            id : snapshot.id , 
            ...snapshot.data()
          })
       })
  }
  
  else{
    this.props.setCurrentUser(userAuth)
  }

  })

}

componentWillUnmount(){
this.unsubscribeFromAuth();
}

  render(){
    
    return (
      <div className="body-text">
        <Header />
        <Switch>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/product/:id" component={LandingPage}/>
        <Route exact path="/shop/:category" component={CategoryPage}/>
        <Route exact path="/procedpayment" component={ProceedPayment}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/wishlist" component={WishList}/>
        <Route exact path="/signin"  render={()=>
          this.props.currentUser ?(
            <Redirect to = "/" />
              ) : (
            <SignInSignUp/>
              )
          } 
        />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  currentUser :  selectCurrentUser(state)
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser : user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
