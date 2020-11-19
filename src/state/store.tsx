// store.js
import React, {createContext, useReducer} from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children }:any ) => {
  const [state, dispatch] = useReducer((state:any, action:any) => {
    switch(action.type) {
      case 'authentication':
        const newState = {}; // do something with the action
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }