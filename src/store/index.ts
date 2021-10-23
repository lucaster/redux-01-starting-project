import { configureStore, createAction, createSlice, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit';

export interface State {
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

const initialState: State = { counter: 0, showCounter: true };

// this object represents the switch statement inside the reducer fn:
// we can mutate state in these functions, because the state here is a mutable proxy
// these will become meaningful methods that we can call to dispatch actions by passing just the action payload to the method
const reducers: ValidateSliceCaseReducers<State, SliceCaseReducers<State>> = {
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
};

const whole = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: reducers
});

const reducer = whole.reducer;

const store = configureStore({
  reducer: reducer
});

/**
 * Interface to dispatch actions through meaningfully named methods
 */
export const actions = whole.actions;

const IncrementCreator = createAction<{ readonly amount: number; }, MyActionType>('counter/increment');
const DecrementCreator = createAction<{ readonly amount: number; }, MyActionType>('counter/decrement');
const ToggleCreator = createAction<any, MyActionType>('counter/toggle');

export const buildIncrementAction = (amount: number) => IncrementCreator({ amount });
export const buildDecrementAction = (amount: number) => DecrementCreator({ amount });
export const buildToggleAction = () => ToggleCreator(undefined);

export default store;
