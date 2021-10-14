import React from "react";
import SignIn from "../../../components/account/sign-in-register/sign-in";
import './sign-in-register.scss'
import Register from "../../../components/account/sign-in-register/register";

const SignInPage = () => {
  return (
    <div className="sign-in-register-forms">
        <SignIn />
        <Register />

    </div>
  );
};

export default SignInPage;