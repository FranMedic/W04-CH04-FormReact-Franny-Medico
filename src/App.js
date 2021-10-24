import "./App.css";
import { useState } from "react";
import Context from "./Components/Context/Context";

function App() {
  const initialData = {
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    username: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialData);

  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      <section className="container d-flex justify-content-center align-items-center mh-100"></section>
    </Context.Provider>
  );
}

export default App;
