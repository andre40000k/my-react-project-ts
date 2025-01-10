import { useSelector } from "react-redux";
import { RootState } from "../store";

function UserList() {
  const users = useSelector((state: RootState) => state.user.users);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
