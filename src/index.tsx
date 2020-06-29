import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { ChatContext } from "./app/stores/ChatContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <ChatContext.Provider value={{ message, setMessage }}>
    
    </ChatContext.Provider> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
