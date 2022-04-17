import React from "react";
import SignInComponent from "../../../components/account/sign-in-register/sign-in.component";
import RegisterComponent from "../../../components/account/sign-in-register/register.component";
import './sign-in-register.scss'

const SignInRegisterPage = () => {
  return (
    <div className="sign-in-register-forms">
        <SignInComponent />
        <RegisterComponent />
    </div>
  );
};

export default SignInRegisterPage;