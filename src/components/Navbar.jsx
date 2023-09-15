import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constants";

const Navbar = ({ isForm }) => {
  return (
    <nav className="px-8 md:px-14 py-5 flex justify-between items-center sticky top-0 w-full">
      <Link to={ROUTES.HOME}>
        <p className="font-bold text-lg">
          <span className="text-primary">Sector</span>{" "}
          <span className="text-black">App</span>
        </p>
      </Link>
      {isForm ? (
        <Link
          to="/"
          className="text-primary underline text-sm flex items-center"
        >
          <svg
            className="rotate-90 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 12 7"
            fill="none"
          >
            <path
              d="M5.46967 6.76978C5.76256 7.06267 6.23744 7.06267 6.53033 6.76978L11.3033 1.99681C11.5962 1.70392 11.5962 1.22904 11.3033 0.936151C11.0104 0.643258 10.5355 0.643258 10.2426 0.936151L6 5.17879L1.75736 0.936151C1.46447 0.643258 0.989593 0.643258 0.696699 0.936151C0.403806 1.22904 0.403806 1.70392 0.696699 1.99681L5.46967 6.76978ZM5.25 5.20813V6.23945H6.75V5.20813H5.25Z"
              fill="#F6AF03"
            />
          </svg>
          Back to list
        </Link>
      ) : (
        <Link to={ROUTES.ADD}>
          <button className="bg-primary text-xs text-white px-4 py-1 rounded-lg flex items-center gap-3 hover:bg-opacity-90">
            <span className="text-base">+</span>
            <span>Add Data</span>
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
