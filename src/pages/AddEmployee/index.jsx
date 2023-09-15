/* eslint-disable react/jsx-key */
import Layout from "../../components/Layout";
import { useEffect } from "react";
import { getAllSectors } from "../../utils/requests";

import Form from "../../components/Form";
import useAddEmployee from "./AddEmployee.hook";

const AddEmployee = () => {
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
  } = useAddEmployee();

  // fetch all sectors
  useEffect(() => {
    getAllSectors().then((res) => setSectors(res));
  }, []);

  return (
    <Layout isForm>
      <div className="text-center">
        <h3 className="text-primary text-lg sm:text-3xl mt-10 font-medium">
          Add Employee
        </h3>
        <p className="text-gray-500 text-sm mt-2 w-3/4 md:w-1/2 mx-auto">
          Please enter your name and pick the sectors you are currently involved
          in.
        </p>
      </div>
      <Form
        btnText={"Submit"}
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

export default AddEmployee;
