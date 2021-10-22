import "./App.css";

function App() {
  return (
    <>
      <div className="container ">
        <div className="row justify-content-md-center">
          <form className="col-lg-3">
            <div className="form-group">
              <label htmlFor="formName">Name</label>
              <input
                type="text"
                className="form-control"
                id="formName"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="formLastName"
                placeholder="Last Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="formDate">Date</label>
              <input
                type="date"
                className="form-control"
                id="formDate"
                placeholder="date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formYears">Years</label>
              <input
                type="text"
                className="form-control"
                id="formLastName"
                placeholder="userYears"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="Email1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
            </div>
          </form>
          <div className="row">
            <form className="col-lg-3">
              <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="InputPassword"
                  placeholder="Password"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberCheck"
                />
                <label className="form-check-label" htmlFor="rememberCheck">
                  Remember Me
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
