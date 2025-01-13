import { useDispatch } from "react-redux";
import { addUserAsync } from "../slices/userSlice";
import User from "../interface/IUser";
import { useState } from "react";
import { AppDispatch } from "../store";

function AddUserForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const newUser: User = { id: Date.now(), name };
      dispatch(addUserAsync(newUser));
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name: "
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;