import { createAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  readonly counter: 0;
  readonly showCounter: boolean;
}

/**
 * Use the slice name as prefix:
 */
type MyActionType = 'counter/increment' | 'counter/decrement' | 'counter/toggle';

interface MyAction {
  readonly type: MyActionType;
  readonly payload: {
    readonly amount?: number;
  }
}

const initialCounterState: CounterState = {
  counter: 0,
  showCounter: true
};

export const couterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state, action) => {
      console.debug('createSlice', 'increment', JSON.stringify({ state, action }));
      state.counter += (action as MyAction).payload.amount!;
    },
    decrement: (state, action) => {
      console.debug('createSlice', 'decrement', JSON.stringify({ state, action }));
      state.counter -= (action as MyAction).payload.amount!;
    },
    toggle: (state, action) => {
      console.debug('createSlice', 'toggle', JSON.stringify({ state, action }));
      state.showCounter = !state.showCounter;
    }
  }
});

/**
 * Interface to dispatch actions through meaningfully named methods
 */
export const counterActions = couterSlice.actions;

const IncrementCreator = createAction<{ readonly amount: number; }, MyActionType>('counter/increment');
const DecrementCreator = createAction<{ readonly amount: number; }, MyActionType>('counter/decrement');
const ToggleCreator = createAction<any, MyActionType>('counter/toggle');

export const buildIncrementAction = (amount: number) => IncrementCreator({ amount });
export const buildDecrementAction = (amount: number) => DecrementCreator({ amount });
export const buildToggleAction = () => ToggleCreator(undefined);
