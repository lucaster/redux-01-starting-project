import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Action, Reducer } from 'redux';

export interface State {
  readonly counter: 0;
  readonly showCounter: boolean;
}

export type MyActionType = 'increment' | 'decrement' | 'toggle';

export interface MyAction extends Action<MyActionType> {
  readonly payload: {
    readonly amount?: number;
  }
}

type MyReducer = Reducer<State, MyAction>;

const initialState: State = { counter: 0, showCounter: true };

const whole = createSlice({
  name: 'whole',
  initialState: initialState,
  // this object represents the switch statement inside the reducer fn:
  // we can mutate state in these functions, because the state here is a mutable proxy
  // these will become meaningful methods that we can call to dispatch actions by passing just the action payload to the method
  reducers: {
    increment: (state, action) => {
      console.debug('createSlice', 'increment', JSON.stringify({state, action}));
      state.counter += (action as MyAction).payload.amount!;
    },
    decrement: (state, action) => {
      console.debug('createSlice', 'decrement', JSON.stringify({state, action}));
      state.counter -= (action as MyAction).payload.amount!;
    },
    toggle: (state, action) => {
      console.debug('createSlice', 'togglecrement', JSON.stringify({state, action}));
      state.showCounter = !state.showCounter;
    }
  }
});

const reducer: MyReducer = whole.reducer;

const store = configureStore({
  reducer: reducer
});

export const actions = whole.actions;

export default store;
