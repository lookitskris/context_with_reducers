import React, { createContext, useContext, useReducer } from "react";
import fruitReducer from "./reducers/fruitReducer";
import barReducer from "./reducers/barReducer";

const StoreContext = createContext();

const initialState = {
  selectedFruit: "",
  barValue: 0,
};

const combineReducers = (...reducers) => (
  state = initialState,
  action = {}
) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(fruitReducer, barReducer),
    initialState
  );

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
