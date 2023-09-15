import axios from "axios";

export const getAllSectors = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/sectors`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllEmployees = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/employees`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const addEmployee = async (body) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/new-employee`,
      body
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getEmployee = async (id) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/employees/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const editEmployee = async (id, body) => {
  try {
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/employees/${id}`,
      body
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_API_URL}/employees/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
