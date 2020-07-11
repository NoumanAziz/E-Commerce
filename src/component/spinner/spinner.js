import React from 'react';
import './spinner.scss'

const Spinner = (WrappedComponent)=>{
  const withSpinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <div className = 'spinner-overlay'>
            <div className = 'spinner-container'>

            </div>
        </div>
        
        ):(
             <WrappedComponent {...otherProps}/>
             );
};
return withSpinner
}

export default Spinner;