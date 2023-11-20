import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import "./index.css";
import App from "./App";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/node_front_bc_55_Stepaniuk-Den">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);


