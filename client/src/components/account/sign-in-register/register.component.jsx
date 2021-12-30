import React from "react";
import './sign-in-register.component.scss'
import FormInput from './partials/form';
import CustomButton from '../../partials/customer-button/custom-button';

const Register = () => {
    return (
        <div className="register-form">
        <h2>Don't have an account? Sign up!</h2>
        <form>
        <FormInput
            type='text'
            name='displayName'
            value="display name entered"
            label='Display Name'
            required
          />
          <FormInput
            type="email"
            name="email"
            value="email address"
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value="password entered"
            label="Password"
            autoComplete="off"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value="confirmed password"
            label="Confirm Password"
            autoComplete="off"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Register</CustomButton>
          </div>
        </form>
      </div>
    )
};

export default Register;