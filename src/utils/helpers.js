export const isCurrentUserData = (id) => {
  return id === localStorage.getItem("userID");
};
