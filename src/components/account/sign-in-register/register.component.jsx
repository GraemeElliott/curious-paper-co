import { React, useState } from "react";
import './sign-in-register.component.scss'
import FormInput from './partials/form';
import CustomButton from '../../partials/custom-button/custom-button';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const RegisterComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    };

    try {
      const { user } = await createAuthUserWithEmailAndPassword (email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('User already exists')
      } else (console.log('User created encountered an error', error))     

    }

  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});

  };

    return (
        <div className="register-form">
        <h2>Don't have an account? Register!</h2>
        <form onSubmit={handleSubmit}>

          <FormInput
          label="Display Name"
          type='text' 
          onChange={handleChange} 
          name="displayName" 
          value={displayName}
          required/>

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


          <FormInput
          label="Confirm Password"
          type='password'
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required/>


          <CustomButton type="submit">Register</CustomButton>


        </form>
      </div>
    )
};

export default RegisterComponent;