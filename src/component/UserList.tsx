// import { useContext } from "react"; // лекционній вариант
// import { UserContext} from "../context/UserContext"; // лекционній вариант
import {useUserContext } from "../context/UserContext";

function UserList() {
  //   const { users } = useContext(UserContext); // лекционній вариант
  const { users } = useUserContext();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
