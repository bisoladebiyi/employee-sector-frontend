/* eslint-disable react/jsx-key */
import Layout from "../../components/Layout";
import { useEffect } from "react";
import { getAllSectors } from "../../utils/requests";

import Form from "../../components/Form";
import useAddEmployee from "./EditEmployee.hook";

const EditEmployee = () => {
  // get all logic from hook file
  const {
    fullName,
    sectorID,
    isTermsChecked,
    isLoading,
    sectors,
    isDisabled,
    setFullName,
    setSectors,
    onSubmit,
    handleTermsCheckbox,
    updateSector,
    fetchEmployee,
    paramID,
  } = useAddEmployee();

  // get all sectors
  useEffect(() => {
    getAllSectors().then((res) => setSectors(res));
  }, []);

  // fetch current employee data
  useEffect(() => {
    fetchEmployee();
  }, [paramID]);

  return (
    <Layout isForm>
      <div className="text-center">
        <h3 className="text-primary text-lg sm:text-3xl mt-10 font-medium">
          Edit Employee
        </h3>
        <p className="text-gray-500 text-sm mt-5 w-3/4 md:w-1/2 mx-auto">
          Please edit your information in the form below.
        </p>
      </div>
      <Form
        btnText={"Update"}
        fullName={fullName}
        sectorID={sectorID}
        updateSector={updateSector}
        handleTermsCheckbox={handleTermsCheckbox}
        sectors={sectors}
        isDisabled={isDisabled}
        onSubmit={onSubmit}
        isLoading={isLoading}
        setFullName={setFullName}
        isTermsChecked={isTermsChecked}
      />
    </Layout>
  );
};

export default EditEmployee;
