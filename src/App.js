import React from 'react';
import { Route, Switch , Redirect } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import './App.scss';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';
import { connect } from 'react-redux'
import { auth, createUserProfile, createCollectionsAndDocuments} from '../src/firebase/firebaseUtil';
import { setCurrentUser } from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/UserSelector';
import Checkout from './Pages/CheckOut/Checkout';
import ProceedPayment from './Pages/Payment/ProceedPayment';
import WishList from './Pages/WishListPage/WishList';
import SnackbarComponent from './component/Snackbar/Snackbar'






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
// createCollectionsAndDocuments('collections', this.props.collectionData);

}

componentWillUnmount(){
this.unsubscribeFromAuth();
}

  render(){
    
    return (
      <div className="body-text">
        <Header  />
        <Switch>
        <Route exact path="/" component={Home}/> 
        <Route  path="/shop" component={ShopPage}/>
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
       <SnackbarComponent/>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  currentUser :  selectCurrentUser(state),
  // snackbarMessage : selectSnackbarShow(state)
  // collectionData : selectShopData(state)
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser : user=>dispatch(setCurrentUser(user)),
  // setSnackbar : ()=>dispatch(hideSnackbar())
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
