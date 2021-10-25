import { useDispatch, useSelector } from 'react-redux';
import { buildDecrementAction, buildToggleAction, counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  console.debug('Counter');
  // sets up a subscription
  const { counter, showCounter } = useSelector((state) => ({
    counter: state.counter.counter,
    showCounter: state.counter.showCounter
  }));
  const dispatch = useDispatch();

  const handleIncrement = (amount) => (clickEvent) => {
    dispatch(counterActions.increment({ amount: 1 }));
  };

  const handleDecrement = (amount) => (clickEvent) => {
    dispatch(buildDecrementAction(amount));
  };

  const handleToggleCounter = () => {
    dispatch(buildToggleAction());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        showCounter &&
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={handleIncrement(1)}>Increment</button>
            <button onClick={handleIncrement(5)}>Increment by 5</button>
            <button onClick={handleDecrement(1)}>Decrement</button>
          </div>
        </>
      }
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
