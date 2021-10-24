import "./App.css";
import { useState } from "react";
import Context from "./Components/Context/Context";
import PaginationData from "./Components/PaginationData/PaginationData";

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

  const changeData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page >= 0 && page <= 1) {
      setPage(page + 1);
    } else {
      console.log(userData);
    }
  };

  const prevPage = () => {
    if (page >= 0 && page <= 2) {
      setPage(page - 1);
    }
  };
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        changeData,
        page,
        nextPage,
        prevPage,
      }}
    >
      <section className="container d-flex justify-content-center align-items-center mh-100">
        <PaginationData />
      </section>
    </Context.Provider>
  );
}

export default App;
