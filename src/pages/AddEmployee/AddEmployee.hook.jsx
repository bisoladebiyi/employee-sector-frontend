import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { addEmployee } from "../../utils/requests";

const useAddEmployee = () => {
  const [fullName, setFullName] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [sectorID, setSectorID] = useState("");
  const [parentID, setParentID] = useState(null);
  const [sectors, setSectors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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

  // create new employee info
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
      await addEmployee(body);
      alert("Employee has been added!");
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
  };
};

export default useAddEmployee;
