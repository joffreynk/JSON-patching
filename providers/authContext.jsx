"use client";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      JSON.parse(localStorage.getItem("patchingMicroservice")) && setCurrentUser(JSON.parse(localStorage.getItem("patchingMicroservice")));
    }, []);
    
    
    
    useEffect(() => {
    if (currentUser && currentUser.token)
      localStorage.setItem("patchingMicroservice", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
