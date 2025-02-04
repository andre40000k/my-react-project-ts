import { useState } from 'react'
import './App.css'
import ExpensiveCalculation from './components/ExpensiveCalculation';
import Counter from './components/Counter';

function App() {
  const [num, setNum] = useState(5);

  return (
    <div>
      <h1>React Memoization Demo</h1>
      <ExpensiveCalculation num={num} />
      <Counter />
      <button onClick={() => setNum(num + 1)}>Increase Num</button>
    </div>
  );
}

export default App
