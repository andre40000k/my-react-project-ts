import { createContext, useContext} from "react";
import UserContextType from "../interface/IUserContext";
// import {initialState} from "./initialState"; // лекционній вариант

// export const UserContext = createContext<UserContextType>(initialState); // лекционній вариант

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};


