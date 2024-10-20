import { useContext } from 'react';
import './App.css';
import { counterContext } from './context/counterContext';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  fetchRandomNumber,
} from './redux/counter/counterSlice.js';

function App() {
  // const { count, setCount } = useContext(counterContext);
  const dispatch = useDispatch();
  const { count, loading, error } = useSelector(
    (state) => state?.counterReducer
  );

  return (
    <>
      <div className="card">
        <button
          // onClick={() => setCount((prev) => prev + 1)}
          onClick={() => dispatch(increment())}
          style={{ margin: '0 10px' }}
        >
          +
        </button>
        <button>count is {count}</button>
        <button
          // onClick={() => setCount((prev) => prev - 1)}
          onClick={() => dispatch(decrement())}
          style={{ margin: '0 10px' }}
        >
          -
        </button>
        <button onClick={() => dispatch(fetchRandomNumber())}>
          {loading ? 'Loading...' : 'Fetch Random Number'}
        </button>
        {error && <p>Error: {error}</p>}
      </div>
    </>
  );
}

export default App;
