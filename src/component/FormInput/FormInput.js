import React from 'react';
import './FormInput.scss'
const FormInput = ({label , handleChange ,validate, ...props }) => {
    return (
        <div className = "group">
            <input className={ `${validate ? 'new-error-class': ''} form-input`} onChange = {handleChange} {...props}/>
            {label ? 
                <label className = { `${props.value.length ? 'shrink': ''} form-input-label`}>
                    {label}
                </label>
            :null }
        </div>
    );
};

export default FormInput;