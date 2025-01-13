
import AddUserForm from './component/AddUserForm';
import UserList from './component/UserList';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>User Management Redux Async</h1>
      <AddUserForm />
      <UserList />
    </div>
  );
};

export default App
