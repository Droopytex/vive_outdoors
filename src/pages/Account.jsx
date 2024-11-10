
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const Account = () => {
    return (
      <div className="account-container">
        <div className="form-container">
          <RegisterForm />
        </div>
        <div className="form-container">
          <LoginForm />
        </div>
      </div>
    );
  };
  
  export default Account;