import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeesList from "./pages/EmployeesList";
import NotFound from "./pages/NotFound";

const App = () => {
  // create a user id
  useEffect(() => {
    if (!localStorage.getItem("userID")) {
      const user_id = uuidv4();
      localStorage.setItem("userID", user_id);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<EmployeesList />} path={ROUTES.HOME} />
        <Route element={<AddEmployee />} path={ROUTES.ADD} />
        <Route element={<EditEmployee />} path={ROUTES.EDIT + "/:id"} />
        <Route element={<NotFound />} path={"*"} />
      </Routes>
    </div>
  );
};

export default App;
