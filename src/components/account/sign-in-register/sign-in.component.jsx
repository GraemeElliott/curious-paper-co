import { React, useState } from "react";
import './sign-in-register.component.scss'
import FormInput from './partials/form';
import CustomButton from '../../partials/custom-button/custom-button';
import { signInWithGooogleRedirect, signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInComponent = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();

    } catch (error) {
      switch(error.code) {
        case "auth/wrong-password" : alert('The provided password is not correct for this account.');
        break
        case "auth/user-not-found" : alert ("The provided email address does not exist.")
        break;

        default: console.log(error)
      }
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});

  };

    return (
        <div className="sign-in-form">
        <h2>Already have an account? Sign in!</h2>
        <form onSubmit={handleSubmit}>

          <FormInput
          label='Email Address'
          type='email'
          onChange={handleChange} 
          name="email" 
          value={email}
          required />


          <FormInput
          label="Password"
          type='password' 
          onChange={handleChange} 
          name="password" 
          value={password}
          required/>

          <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type='button'buttonType='google' onClick={signInWithGooogleRedirect}>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
};

export default SignInComponent;