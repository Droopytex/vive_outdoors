import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

const Account = () => {
  return (
    <div className="account-container">
      <div className="form-container">
        <Register />
      </div>
      <div className="form-container">
        <Login />
      </div>
    </div>
  );
};

export default Account;
