import { KeyboardEvent, useState } from 'react';
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
        <div className='numberChoice'>
          <label htmlFor="counter">Enter a positive number: </label>
          <input type="number" name="counter" id="counter" min="0" step="1" value={counter} onChange={((event: any) => {
            if (event.target.value >= 0) {
              setCounter(event.target.value)
            } else {
              event.preventDefault();
            }
          })} />
        </div>
      </form>
    </div>
  );
}

export default App;
