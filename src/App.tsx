import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className="App">
        <h1>My React-Redux App {count}</h1>
      </div>
    </Provider>
  );
}

export default App
