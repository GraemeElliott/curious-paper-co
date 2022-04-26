import { React, useState } from "react";
import { useDispatch } from "react-redux";
import './sign-in-register.component.scss'
import FormInput from "./partials/form";
import CustomButton from "../../partials/custom-button/custom-button";
import { register } from "../../../redux/Actions/userActions";

const RegisterComponent = () => {
  window.scrollTo(0, 0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password, passwordConfirm));
  };

  return (
    <div className="register-form">
      <h2>Don't have an account? Sign up!</h2>
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
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
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
          minLength = "5"
        />
          <FormInput
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          label="ConfirmPassword"
          autoComplete="off"
          required
          minLength = "5"
        />

        <div className="buttons">
          <CustomButton type="submit">Register</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;