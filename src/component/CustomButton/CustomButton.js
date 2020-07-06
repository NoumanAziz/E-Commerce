import React from 'react';
import './CustomButton.scss';

const CustomButton = ({children , isGoogleSignin , inverted ,...Props}) => 
   <button 
   className ={`${inverted? 'inverted': ''}   ${isGoogleSignin? 'google-signin': ''} custom-button`} 
   {...Props}
   >{children}
   </button>
      
   


export default CustomButton;