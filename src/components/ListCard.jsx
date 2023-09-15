import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import { isCurrentUserData } from "../utils/helpers";
import { getAllSectors } from "../utils/requests";

const ListCard = ({ employee, remove }) => {
  const [mainSector, setMainSector] = useState("");
  const [subSector, setSubSector] = useState("");
  const isOwnData = isCurrentUserData(employee.user_id);

  useEffect(() => {
    getSectorByID(employee.sector_id, employee.parent_id);
  }, [employee]);

  // fetch sector by its id
  const getSectorByID = async (id, parent_id) => {
    const data = await getAllSectors();

    const parent_name = data?.find((d) => d.id === parent_id).name;
    const name = data?.find((d) => d.id === id).name;

    setMainSector(parent_name);
    setSubSector(name);
  };

  return (
    <div
      className={`bg-dark border border-dashed border-dark rounded-md text-white p-4 ${
        !isOwnData ? "bg-opacity-80" : ""
      }`}
    >
      <div className="flex items-end w-full justify-between">
        <div className="9/12 sm:w-10/12">
          <p className="mb-2 font-medium text-base sm:text-lg">
            {employee.full_name}
          </p>
          <p className="font-medium text-primary text-[10px] md:text-xs">
            Main Sector:{" "}
            <span className="font-normal text-white capitalize">
              {employee.parent_id ? mainSector || "" : subSector || ""}
            </span>
          </p>
          {employee.parent_id && (
            <div className="flex items-center gap-1 text-[10px] md:text-xs flex-wrap">
              <p className="font-medium text-primary">Sub sector:</p>
              <p className="text-gray-200 capitalize">{subSector}</p>
            </div>
          )}
        </div>
        {isOwnData && (
          <div>
            <Link
              to={ROUTES.EDIT + `/${employee.id}`}
              className="text-[10px] text-white underline mr-2"
            >
              Edit
            </Link>
            <button
              className="text-[10px] text-white underline"
              onClick={() => remove(employee.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListCard;
