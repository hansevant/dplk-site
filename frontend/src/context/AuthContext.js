import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const uri = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const id = localStorage.getItem("Id");

    try {
      const response = await axios.get(uri + `/users/${id}`);

      if (response.status === 200) {
        setUser(response.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(`Error : ${error}`);
    } finally{
      setIsLoading(false)
    }
  };
  if(isLoading)return<>Loading...</>

  return (
    <AuthContext.Provider value={{ user, setUser, checkLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;