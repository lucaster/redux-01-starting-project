import { Action, createStore, Reducer } from 'redux';

interface State {
  readonly counter: 0;
}

type MyActionType = 'increment';

interface MyAction extends Action<MyActionType> {}

type MyReducer = Reducer<State, MyAction>;

const initialState: State = { counter: 0 };

const reducer: MyReducer = (state, action) => {
  if (!state) {
    return {
      ...initialState
    }
  }
  if (action.type === 'increment') {
    return {
      ...state,
      counter: state!.counter + 1
    } as State;
  }
  throw new Error('unknown action: ' + JSON.stringify(action));
};

const store = createStore(reducer, initialState);

export default store;
