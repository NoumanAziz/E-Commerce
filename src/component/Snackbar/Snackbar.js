import React from 'react';
import {Snackbar} from '@material/react-snackbar';
import { hideSnackbar } from '../../redux/SnackBarReducer/SnackBarReducerAction';
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectSnackbarShow, selectSnackbarMessage } from '../../redux/SnackBarReducer/SnackbarSelector';


const SnackbarComponent = ({dispatch , snackbarMessageShow , snackbarMessage}) => {
    return (
        <div className = 'snackbar'>
             {snackbarMessageShow ?
            <Snackbar className = 'snackbar'
                message= {`${snackbarMessage}`}
                
                timeoutMs = '4000'
                onClose = {()=>dispatch(hideSnackbar())}
            />
            : null}
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    snackbarMessageShow: selectSnackbarShow,
    snackbarMessage : selectSnackbarMessage
})

export default connect(mapStateToProps)(SnackbarComponent);



