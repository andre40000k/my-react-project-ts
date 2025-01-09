// import React, { useContext} from "react"; // лекционній вариант
// import { UserContext } from "../context/UserContext"; // лекционній вариант

import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

function AddUserForm() {
  const { addUser } = useUserContext();
  //   const { addUser } = useContext(UserContext); // лекционній вариант
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({ id: Date.now(), name });
    setName("");
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
