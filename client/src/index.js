import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./app/App";
import UserStore from "./app/store/UserStore";
import IndicatorsStore from "./app/store/IndicatorsStore";
import RecordsStore from "./app/store/RecordsStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={{user: new UserStore(), indicators: new IndicatorsStore(), records: new RecordsStore()}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
