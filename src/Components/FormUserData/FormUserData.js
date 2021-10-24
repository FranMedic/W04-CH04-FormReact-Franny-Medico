import { useContext } from "react";
import Context from "../Context/Context";
const FormUserData = () => {
  const { userData, changeData } = useContext(Context);
  return (
    <>
      <div className="form-group">
        <label htmlFor="firstName">Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="Enter name"
          value={userData.firstName}
          onChange={changeData}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Enter your last name"
          value={userData.lastName}
          onChange={changeData}
          required
        ></input>
      </div>
      <div className="row">
        <div className="form-group col-10">
          <label htmlFor="birthDate">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="birthDate"
            value={userData.birthDate}
            onChange={changeData}
            required
          ></input>
        </div>
        <div className="form-group col-2">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            value="10"
            readOnly
          ></input>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          pattern="[^ @]*@[^ @]*"
          placeholder="Enter your email"
          value={userData.email}
          onChange={changeData}
          required
        ></input>
      </div>
    </>
  );
};

export default FormUserData;
