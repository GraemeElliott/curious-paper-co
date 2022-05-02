import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './sign-in-register.component.scss'
import FormInput from './partials/form';
import CustomButton from "../../partials/custom-button/custom-button"
import { login } from "../../../redux/Actions/userActions";

const SignInComponent = () => {
  window.scrollTo(0, 0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
      <div className="sign-in-form">
      <h2>Already have an account? Sign in!</h2>
      <form onSubmit={submitHandler}> 
      <FormInput
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label='Username'
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          autoComplete="off"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignInComponent;