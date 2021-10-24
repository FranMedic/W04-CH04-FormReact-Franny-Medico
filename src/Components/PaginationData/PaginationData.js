import { useContext } from "react";
import Context from "../Context/Context";
import PaginationButton from "../PaginationButton/PaginationButton";
import FormUserData from "../FormUserData/FormUserData";
import LoginData from "../LoginData/LoginData";
import RegisterData from "../RegisterData/RegisterData";

const PaginationData = () => {
  const { page } = useContext(Context);

  const getCurrentPage = () => {
    switch (page) {
      case 0:
        return <FormUserData />;
      case 1:
        return <RegisterData />;
      case 2:
        return <LoginData />;
      default:
    }
  };
  const currentPage = getCurrentPage();

  return (
    <form className="form-container">
      {currentPage}
      <PaginationButton />
    </form>
  );
};

export default PaginationData;
