import "./sign-in-register.scss";

import RegisterComponent from "../../components/account/sign-in-register/register.component";
import SignInComponent from "../../components/account/sign-in-register/sign-in.component";

const SignInRegisterPage = () => {
    return (
        <div className="sign-in-register-forms">
            <SignInComponent />
            <RegisterComponent />
            
        </div>
        
      );
};

export default SignInRegisterPage;