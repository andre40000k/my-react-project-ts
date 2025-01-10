import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import User from "../interface/IUser";
import { useState } from "react";

function AddUserForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const newUser: User = { id: Date.now(), name };
      dispatch(addUser(newUser));
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;