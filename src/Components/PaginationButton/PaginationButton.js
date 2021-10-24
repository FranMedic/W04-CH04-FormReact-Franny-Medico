import { useContext } from "react";
import Context from "../Context/Context";

const PaginationButton = () => {
  const { nextPage, prevPage, page } = useContext(Context);
  return (
    <section className="navigation d-flex justify-content-between">
      {page > 0 ? (
        <button className="btn btn-primary mt-4" onClick={prevPage}>
          Go back
        </button>
      ) : null}

      {page < 2 ? (
        <button className="btn btn-primary mt-4" onClick={nextPage}>
          Next
        </button>
      ) : null}
    </section>
  );
};

export default PaginationButton;
