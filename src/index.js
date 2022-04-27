import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StateProvider from "./context/StateProvider";
import Reducer, { initialState } from "../src/data/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
