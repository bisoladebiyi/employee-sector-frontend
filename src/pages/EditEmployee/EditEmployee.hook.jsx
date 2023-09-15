import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { editEmployee, getEmployee } from "../../utils/requests";

const useAddEmployee = () => {
  const [fullName, setFullName] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [sectorID, setSectorID] = useState("");
  const [parentID, setParentID] = useState(null);
  const [sectors, setSectors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { id: paramID } = useParams();

  // fetch employee data
  const fetchEmployee = async () => {
    try {
      const data = await getEmployee(paramID);

      setFullName(data[0].full_name);
      setIsTermsChecked(!!data[0].agree_to_terms);
      setSectorID(data[0].sector_id);
      setParentID(data[0].parent_id);
    } catch (error) {
      alert("Error fetching data.");
    }
  };

  // handle checkbox
  const handleTermsCheckbox = (e) => {
    e.preventDefault();
    setIsTermsChecked(!isTermsChecked);
  };

  // update sectorID
  const updateSector = (e) => {
    let pID = sectors.find((s) => s.id.toString() === e.target.value);
    setSectorID(e.target.value);
    setParentID(pID?.parentID);
  };

  // handle button disability
  const isDisabled = () => {
    if (fullName && isTermsChecked && sectorID) {
      return false;
    } else {
      return true;
    }
  };

  // edit employee data
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      user_id: localStorage.getItem("userID"),
      full_name: fullName,
      sector_id: parseInt(sectorID),
      parent_id: parentID,
      agree_to_terms: isTermsChecked,
    };

    try {
      await editEmployee(paramID, body);
      alert("Employee information has been updated.");
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fullName,
    sectorID,
    parentID,
    isTermsChecked,
    isLoading,
    sectors,
    paramID,
    isDisabled,
    setFullName,
    setSectorID,
    setParentID,
    setIsTermsChecked,
    setIsLoading,
    setSectors,
    onSubmit,
    handleTermsCheckbox,
    updateSector,
    fetchEmployee,
  };
};

export default useAddEmployee;
