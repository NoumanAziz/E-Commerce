import React, { Component } from 'react';
import FormInput from '../../component/FormInput/FormInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import { googleSignin} from '../../../src/firebase/firebaseUtil';
import { facebookSignin } from '../../../src/firebase/firebaseUtil';
import { Button } from 'semantic-ui-react'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {auth , uiConfig} from '../../../src/firebase/firebaseUtil'
import ModalComponent from '../ModalComponent/ModalComponent'
import './SignIn.scss';

class SignIn extends Component {
    state = {
        email : '',
        password : '',
        emailError: null , 
        passwordError: null,
        validate : true 
    }

handleSubmit = async event =>{
    event.preventDefault();
    const {email , password, validate} = this.state;
    if (validate){ 
    try {
        await auth.signInWithEmailAndPassword(email , password)
        this.setState({email : '',  password : ''})

    } catch (error) {
        console.error('Error', error)
    } 
}
    else
    alert('Enter Valid credentials');
}

handleChange = event => {
    const { value , name} = event.target;
    this.setState({[name] : value})

}

formValidate = (name)=>{
    let nameError = name +'Error';
    
    if(this.state[name] === ''){
       console.log( name, ' must not empty')
        this.setState({[nameError]: `* ${name} field must not be empty`,
        validate : false},
        ()=>{console.log('Empty state', this.state[nameError], this.state.validate)})

        return;
    }

    switch (name) {
        case 'email':
            console.log('email case switch');
            const emailRegex = RegExp(
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              );
              this.setState({emailError: emailRegex.test(this.state.email)
                ? null: "* invalid email address"},
              ()=> this.setState ({validate : this.state.emailError? false : true } ,
                ()=>{console.log('Email states and validate', this.state.emailError , this.state.validate)})) 
                
            break;
        case 'password':
            console.log('password case switch');
            const passwordRegex = RegExp(
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,32}$/
              );
              this.setState({passwordError: passwordRegex.test(this.state.password)
                ? null
                : "* Password must contain a number, capital & a small letter (7-32 figures)"},
                ()=> this.setState({validate : this.state.passwordError ? false : true},
                    ()=> console.log ('password states and validate', this.state.passwordError, this.state.validate))) 
            break
        default:
            break;
        
    }
    if (this.state[nameError] == null)
    this.setState({validate:true})

}




    render() {
        return (
            <div className = 'signin'>
                
                <h3>Enter your Email and password to Sign in</h3>

                <form onSubmit={this.handleSubmit} className= 'form-input-signin'>
                    <FormInput 
                            name = 'email' 
                            type ='email' 
                            value={this.state.email} 
                            required
                            handleChange = {this.handleChange} 
                            label = 'Email'
                            onBlur = {()=>this.formValidate('email')}
                            validate = {this.emailError}
                            />
                    {this.state.emailError ?
                        <div className = 'error'>{this.state.emailError}</div>
                    :null }
                    
                    <FormInput 
                            name = 'password' 
                            type ='password' 
                            value={this.state.password} 
                            required 
                            handleChange = {this.handleChange}
                            label = 'Password'
                            onBlur = {()=>this.formValidate('password')}
                            validate = {this.state.passwordError}
                            />
                    {this.state.passwordError ?
                        <div className = 'error'>{this.state.passwordError}</div>
                    :null }

                   <div className = 'buttons'>
                       <div  className = 'signin-button'>
                     <CustomButton  type = 'submit' >Sign In</CustomButton>
                     </div>
                     -----or login with-----
                        <div className = 'google-fb'>
                            {/* <CustomButton type = 'button' onClick = {googleSignin}   isGoogleSignin = 'true'  >
                                            {' '}Google{' '} 
                            </CustomButton> */}

                        <Button circular color='google plus' icon='google plus' onClick = {googleSignin} size='large' type = 'button'/> 

                            {/* <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={auth}/> */}
                        <Button circular color='facebook' icon='facebook' onClick = {facebookSignin} size='large' type = 'button'/>

                            {/* <CustomButton type= 'button' onClick = {facebookSignin} isGoogleSignin = 'true' >
                                            {' '}facebook{' '} 
                            </CustomButton> */}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ModalComponent(SignIn);