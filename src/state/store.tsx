// store.js
// https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/
// https://stackoverflow.com/questions/54577865/react-createcontext-issue-in-typescript
import React, {createContext, useReducer, Dispatch} from 'react';
import { Actions, initialState, IState, reducer } from "./reducer";

interface IContextProps {
    state: IState;
    dispatch: Dispatch<Actions>;
  }

const store = createContext({} as IContextProps);
const { Provider } = store;

const StateProvider = ( { children }:any ) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }