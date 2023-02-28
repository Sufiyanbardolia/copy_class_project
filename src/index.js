import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configStore from "./Redux/Store";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
const store = configStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

persistStore(store, {}, () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </Provider>
    </React.StrictMode>
  );
});

reportWebVitals();
