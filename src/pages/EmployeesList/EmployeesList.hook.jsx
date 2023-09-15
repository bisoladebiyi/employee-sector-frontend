import { useState } from "react";
import { isCurrentUserData } from "../../utils/helpers";
import { deleteEmployee, getAllEmployees } from "../../utils/requests";

const useEmployeesList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [list, setList] = useState([]);
  const [initialList, setInitialList] = useState([]);
  const [isFetching, setIsFetching] = useState(true)

  const changeTab = (num) => {
    setActiveTab(num);

    if (num === 0) {
      setList(initialList);
    } else {
      setList((prev) => prev.filter((p) => isCurrentUserData(p.user_id)));
    }
  };

  const fetchEmployees = async () => {
    try {
      const data = await getAllEmployees();

      setList(data);
      setInitialList(data);
    } catch (error) {
      alert(error.message);
    }

    setIsFetching(false)
  };

  const removeEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      await fetchEmployees();

      alert("Employee Removed!");
    } catch (err) {
      alert("Cannot delete at this time...");
    }
  };
  return { activeTab, list, isFetching, changeTab, fetchEmployees, removeEmployee };
};

export default useEmployeesList;
