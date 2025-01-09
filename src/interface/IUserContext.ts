import User from "./IUser"

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
}

export default UserContextType;