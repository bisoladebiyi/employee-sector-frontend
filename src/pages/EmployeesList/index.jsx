import Layout from "../../components/Layout";

import ListCard from "../../components/ListCard";
import EmptyState from "../../components/EmptyState";
import { useEffect } from "react";
import useEmployeesList from "./EmployeesList.hook";
import { Oval } from "react-loader-spinner";

const EmployeesList = () => {
  // get all logic from hook file
  const {
    activeTab,
    list,
    isFetching,
    changeTab,
    fetchEmployees,
    removeEmployee,
  } = useEmployeesList();

  //  fetch all employees
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Layout>
      <div className="px-8 sm:px-14 mt-10">
        <div className="flex gap-4 font-semibold text-base sm:text-lg border-b border-gray-300">
          <button
            className={`pb-3 ${activeTab === 0 ? "active" : ""}`}
            onClick={() => changeTab(0)}
          >
            All Employees
          </button>
          <button
            className={`pb-3 ${activeTab === 1 ? "active" : ""}`}
            onClick={() => changeTab(1)}
          >
            My Employees
          </button>
        </div>
        {isFetching ? (
          <div className="flex flex-col justify-center items-center h-[60vh]">
            <Oval
              height={80}
              width={80}
              color="#F6AF03"
              wrapperClass="flex justify-center"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#eee"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : list.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {list.map((data, i) => (
              <ListCard employee={data} remove={removeEmployee} key={i} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </Layout>
  );
};

export default EmployeesList;
