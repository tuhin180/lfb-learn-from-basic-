import React, { createContext } from "react";
export const AuthUserContext = createContext();
const userInfo = {};
const UserContext = ({ children }) => {
  return (
    <AuthUserContext.Provider value={userInfo}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default UserContext;
