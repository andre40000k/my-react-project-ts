
import UserProvider from "./provider/UserProvider";
import AddUserForm from './component/AddUserForm';
import UserList from './component/UserList';
import './App.css'

const App = () => {
  return (
    <UserProvider>
      <h1>User Management</h1>
      <AddUserForm />
      <UserList />
    </UserProvider>
  );
};

export default App
