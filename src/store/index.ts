import { Action, createStore, Reducer } from 'redux';

export interface State {
  readonly counter: 0;
}

export type MyActionType = 'increment' | 'decrement';

export interface MyAction extends Action<MyActionType> {
  readonly amount: number;
}

type MyReducer = Reducer<State, MyAction>;

const initialState: State = { counter: 0 };

const reducer: MyReducer = (state, action) => {
  // {"type":"@@redux/INITv.e.9.l.v.i"} WTF
  console.debug('reducer', JSON.stringify({ state, action }));
  if (!state) {
    return {
      ...initialState
    }
  }
  if (action.type === 'increment') {
    return {
      ...state,
      counter: state!.counter + action.amount
    } as State;
  }
  if (action.type === 'decrement') {
    return {
      ...state,
      counter: state!.counter - action.amount
    } as State;
  }
  return {
    ...state
  }
};

const store = createStore(reducer, initialState);

export default store;
