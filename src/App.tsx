import { useState } from 'react';
import './App.css';
import FizzBuzz from './components/FizzBuzz';

function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="App">
      <form className='fizzbuzz'>
        <FizzBuzz displayCount={counter} />
        <div className='buttons'>
          <button className='button' type='button' onClick={() => setCounter(counter - 1)} disabled={counter <= 0}>-</button>
          <button className='button' type='button' onClick={() => setCounter(counter + 1)}>+</button>
        </div>
      </form>
    </div>
  );
}

export default App;
