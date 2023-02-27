import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom"

import App from './App'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import mystore from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={mystore}>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          newestOnTop
          pauseOnHover={false}
          theme="dark"
        />
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);
