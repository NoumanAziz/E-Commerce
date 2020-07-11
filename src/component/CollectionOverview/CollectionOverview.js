import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectShopData } from '../../redux/shopDataReducer/shopDataSelector';
import { connect } from 'react-redux'
import './CollectionOverview.scss'
import {Snackbar} from '@material/react-snackbar';
import '@material/react-snackbar/dist/snackbar.css';

import { createStructuredSelector } from 'reselect'
import Spinner from '../spinner/spinner';
import { selectSnackbarShow } from '../../redux/SnackBarReducer/SnackbarSelector';
import { hideSnackbar } from '../../redux/SnackBarReducer/SnackBarReducerAction';

const CollectionOverview = ({shopData , dispatch, snackbarMessage}) => {
    return (
        
             
        <div className = 'collection-overview'>
            <div>
                {shopData.map(({id , ...Props})=>
                <CollectionPreview key ={id} itemNumber = {4}  {...Props} />)}
            </div>
            {/* {snackbarMessage ?
            <Snackbar className = 'snackbar'
                message="Item Added"
                
                timeoutMs = '4000'
                onClose = {()=>dispatch(hideSnackbar())}
            />
            : null} */}
        </div>
    
    )
};
const mapStateToProps = createStructuredSelector({
    shopData : selectShopData,
    snackbarMessage : selectSnackbarShow
})
export default connect(mapStateToProps)(CollectionOverview);