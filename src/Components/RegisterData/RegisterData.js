import { useContext } from "react";
import Context from "../../Context/Context";

const PersonalData = () => {
  const { userData, changeData } = useContext(Context);
  return (
    <>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
          value={userData.username}
          onChange={changeData}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          value={userData.password}
          onChange={changeData}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="form_password-repeat">Repeat your password</label>
        <input
          type="password"
          className="form-control"
          id="form_password-repeat"
          placeholder="Repeat your password"
          required
        ></input>
      </div>
    </>
  );
};

export default PersonalData;
