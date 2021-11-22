import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataContextProvider } from "./contexts/dataContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DataContextProvider>
  </React.StrictMode>,

  document.getElementById("root"),
);
