import React from "react";
import SignIn from "../../../components/account/sign-in-register/sign-in.component";
import Register from "../../../components/account/sign-in-register/register.component";
import './sign-in-register.scss'

const SignInPage = () => {
  return (
    <div className="sign-in-register-forms">
        <SignIn />
        <Register />
    </div>
  );
};

export default SignInPage;