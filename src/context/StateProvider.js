import StateContext from "./Context";
import { useReducer } from "react";

function StateProvider({ reducer, initialState, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
