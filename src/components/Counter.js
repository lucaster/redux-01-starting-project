import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // sets up a subscription
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = (clickEvent) => {
    dispatch({
      type: 'increment',
    });
  };

  const handleDecrement = (clickEvent) => {
    dispatch({
      type: 'decrement',
    });
  };

  const handleToggleCounter = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
