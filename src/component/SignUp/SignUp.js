import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import './SignUp.scss';
import { auth , createUserProfile } from '../../firebase/firebaseUtil';



export default class SignUp extends Component {
    state = {
        displayName : '',
        displayNameError: null,
        email : '',
        emailError: null,
        password : '',
        passwordError: null,
        confirmPassword: '',
        confirmPasswordError : null,
        photoURL : '',
        Gender : null,
        genderCheck : null
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName , email , password,Gender, validate} = this.state;
        if(!Gender){
            this.setState({genderCheck: 'error'})
            return;
        }

        if (validate){ 
            let photoURL='';
            switch (Gender) {
                case 'male':
                    console.log("Gender in switch" , Gender)

                    photoURL = 'https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg'
                    break;
                case 'female':
                    console.log("Gender  in switch" , Gender)

                    photoURL = 'https://2atstartup.com.au/wp-content/uploads/2019/05/girl-avatar.png'
                break;
                default:
                    break;
            }
           try {
            const userObject= await auth.createUserWithEmailAndPassword(email , password);
             const {user} =  userObject;
            console.log('signup user' , user, userObject , photoURL)
            await createUserProfile(user , {displayName , photoURL})
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error('Error Signup', error)
        }
    }
    else
    alert('Enter Valid credentials');
    }

    handleChange = (event)=>{
        const {name , value} = event.target;
        this.setState({
            [name] : value
        })
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
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
            case 'confirmPassword':
                console.log('Confirm password case switch');
                  this.setState({confirmPasswordError: this.state.password === this.state.confirmPassword
                    ? null
                    : "* Passwords do not match"},
                    ()=> this.setState({validate : this.state.confirmPasswordError ? false : true},
                        ()=> console.log ('Confirm password states and validate', this.state.confirmPasswordError, this.state.validate))) 
                break
            default:
                break;
            
        }
        if (this.state[nameError] == null)
        this.setState({validate:true})
    
    }

    render() {
        const {displayName , email , password , confirmPassword ,genderCheck, photoURL} = this.state;
        return (
            <div className = 'sign-up'>
                 <h2 className = 'title'>If you don't have account</h2>
                <span>Sign up with your email and password</span>
                <form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
                    <FormInput
                    name = 'displayName'
                    type = 'text'
                    value = {displayName}
                    onChange = {this.handleChange}
                    label = 'Display Name'
                    required
                    onBlur = {()=>this.formValidate('displayName')}
                    />
                    {this.state.displayNameError ?
                        <div className = 'error'>{this.state.displayNameError}</div>
                    :null } 
                    <div className = {`${genderCheck? 'gender-error' : null } gender`} >           
                     Gender: <input type="radio" name="Gender" value="male" onClick={this.handleChange}/>Male 
                    <input type="radio" name="Gender" value="female" onClick={this.handleChange}/>Female
                    </div>
                    <FormInput
                    name = 'email'
                    type = 'email'
                    value = {email}
                    onChange = {this.handleChange}
                    label = 'Email'
                    required
                    onBlur = {() => this.formValidate('email')}
                    />
                     {this.state.emailError ?
                        <div className = 'error'>{this.state.emailError}</div>
                    :null }
                    <FormInput
                    name = 'password'
                    type = 'password'
                    value = {password}
                    onChange = {this.handleChange}
                    label = "Password"
                    required
                    onBlur = {() => this.formValidate('password')}
                    />
                    {this.state.passwordError ?
                        <div className = 'error'>{this.state.passwordError}</div>
                    :null }
                    <FormInput
                    name = 'confirmPassword'
                    type = 'password'
                    value = {confirmPassword}
                    onChange = {this.handleChange}
                    label = 'Confirm Password'
                    required
                     onBlur={()=>this.formValidate('confirmPassword')}   
                    />
                     {this.state.confirmPasswordError ?
                        <div className = 'error'>{this.state.confirmPasswordError}</div>
                    :null }

                    <div className = 'button'>
                    <div className = 'signUp'>
                    <CustomButton  type = 'submit' >Signup
                    </CustomButton>
                    </div>
                    </div>
                </form>
                
            </div>
        )
    }
}
