import React from "react";
import './sign-in-register.component.scss'
import FormInput from './partials/form';
import CustomButton from '../../partials/customer-button/custom-button';

const SignIn = () => {
        return (
            <div className="sign-in-form">
            <h2>Already have an account? Sign in!</h2>
            <form>
              <FormInput
                name="email"
                type="email"
                value="emal address"
                label="Email"
                required
              />
              <FormInput
                name="password"
                type="password"
                value="password entered"
                label="Password"
                autoComplete="on"
                required
              />
    
              <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
              </div>
            </form>
          </div>
        )
}

export default SignIn;