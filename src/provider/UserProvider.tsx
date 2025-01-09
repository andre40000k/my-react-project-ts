import {useState, ReactNode } from "react";
import User from "../interface/IUser";
import { UserContext} from "../context/UserContext";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return <UserContext.Provider value={{ users, addUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
