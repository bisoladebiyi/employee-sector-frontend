import { Link } from "react-router-dom";
import not_found from "../assets/not_found.png";
import { ROUTES } from "../utils/constants";

const EmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <figure className="w-3/5 sm:w-1/3 md:w-1/4">
        <img className="w-full" src={not_found} />
      </figure>
      <p className="text-gray-400 text-sm mt-10 text-center leading-6">
        We have no data in our database
        <br />
        <Link to={ROUTES.ADD} className="text-primary underline">
          Add a name and sector
        </Link>
      </p>
    </div>
  );
};

export default EmptyState;
