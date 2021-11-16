import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { AuthContextProvider } from "./contexts/authContext";
import { DataContextProvider } from "./contexts/dataContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      {/* <AuthContextProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </AuthContextProvider> */}
    </DataContextProvider>
  </React.StrictMode>,

  document.getElementById("root"),
);
