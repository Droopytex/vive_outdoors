
import RegisterForm from "../components/Auth/Register";
import LoginForm from "../components/Auth/Login";

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