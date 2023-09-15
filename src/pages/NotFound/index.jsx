import Layout from "../../components/Layout";
import not_found from "../../assets/images/404.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <figure className="w-3/5 sm:w-1/3 md:w-1/4">
          <img className="w-full" src={not_found} />
        </figure>
        <p className="text-gray-400 text-sm mt-10 text-center leading-6">
          Oops! The page you&apos;re looking for couldn&apos;t be found.
          <br />
          <Link to={ROUTES.HOME} className="text-primary underline">
            Back to home
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
