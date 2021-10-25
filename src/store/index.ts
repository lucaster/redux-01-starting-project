import { configureStore, createAction, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  readonly counter: 0;
  readonly showCounter: boolean;
}

/**
 * Use the slice name as prefix:
 */
export type MyActionType = 'counter/increment' | 'counter/decrement' | 'counter/toggle';

export interface MyAction {
  readonly type: MyActionType;
  readonly payload: {
    readonly amount?: number;
  }
}

const initialCounterState: CounterState = { counter: 0, showCounter: true };

const couterSlice = createSlice({
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

interface AuthState {
  readonly authenticated: boolean
}

const initialAuthState: AuthState = {
  authenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.authenticated = true;
    },
    logout: (state, action) => {
      state.authenticated = false;
    }
  }
});

export const authActions = authSlice.actions;

const store = configureStore({
  reducer: {
    counter: couterSlice.reducer,
    auth: authSlice.reducer
  }
});

export default store;
