import React , {Component} from 'react'
import { connect } from 'react-redux'
import './ShopPage.scss'
import { fetchingDataAsync } from '../../redux/shopDataReducer/shopDataReducerAction'
import CollectionOverview from '../../component/CollectionOverview/CollectionOverview'
import {Route} from 'react-router-dom'
import CategoryPage from '../CategoryPage/CategoryPage'
import LandingPage from '../ProductLandingPage/LandingPage'
import Spinner from '../../component/spinner/spinner'
import { createStructuredSelector } from 'reselect'
import { selectIsFetching, selectIsCollectionLoaded } from '../../redux/shopDataReducer/shopDataSelector'

const CollectionOverviewSpinner  = Spinner(CollectionOverview);
const CategoryPageSpinner = Spinner(CategoryPage);
const LandingPageSpinner = Spinner(LandingPage);

 class ShopPage extends Component {


    unsubscribeFromSnapshot = null;
    
    componentDidMount() {
        this.props.dispatch(fetchingDataAsync())
    }

    render() {
      const {match , loading ,  isCollectionLoaded } = this.props;
      console.log('loading ' , loading)
      console.log('is collection loaded ' , isCollectionLoaded)
        return (
            <div className = 'shop'>
                <Route exact path={`${match.path}`} render = { 
                    ()=> <CollectionOverviewSpinner isLoading = {loading}/>}
                /> 
                <Route exact path={`${match.path}/:category`} render = {
                    (props)=> <CategoryPageSpinner isLoading = {!isCollectionLoaded} {...props}/>}
                />
                <Route exact path={`${match.path}/product/:id`} render = {
                    (props)=> <LandingPageSpinner isLoading = {!isCollectionLoaded} {...props}/>}
                />
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    loading : selectIsFetching,
    isCollectionLoaded : selectIsCollectionLoaded
})


export default connect(mapStateToProps)(ShopPage);