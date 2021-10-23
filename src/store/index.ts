import { Action, createStore, Reducer } from 'redux';

export interface State {
  readonly counter: 0;
  readonly show: boolean;
}

export type MyActionType = 'increment' | 'decrement' | 'toggle';

export interface MyAction extends Action<MyActionType> {
  readonly amount: number;
}

type MyReducer = Reducer<State, MyAction>;

const initialState: State = { counter: 0, show: true };

const reducer: MyReducer = (state, action) => {
  if (!state) {
    return {
      ...initialState,
    };
  }
  if (action.type === 'increment') {
    return {
      ...state,
      counter: state!.counter + action.amount,
    } as State;
  }
  if (action.type === 'decrement') {
    return {
      ...state,
      counter: state!.counter - action.amount,
    } as State;
  }
  if (action.type === 'toggle') {
    return {
      ...state,
      show: !state.show
    };
  }
  // {"type":"@@redux/INITv.e.9.l.v.i"} WTF
  console.debug('reducer', JSON.stringify({ state, action }));
  return {
    ...state,
  };
};

const store = createStore(reducer, initialState);

export default store;
