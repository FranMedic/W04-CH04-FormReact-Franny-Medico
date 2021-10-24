const Login = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="form_username-login">Username</label>
        <input
          type="text"
          className="form-control"
          id="form_username-login"
          placeholder="Enter username"
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="form_password-login">Password</label>
        <input
          type="password"
          className="form-control"
          id="form_password-login"
          placeholder="Enter your password"
          required
        ></input>
      </div>
      <div className="custom-control custom-checkbox mt-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="remember-password"
          required
        ></input>
        <label className="custom-control-label m-2" htmlFor="remember-password">
          Remember password
        </label>
      </div>
    </>
  );
};

export default Login;
