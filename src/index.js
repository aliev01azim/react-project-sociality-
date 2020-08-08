import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state from './redux/state';
import {addPost} from './redux/state';
import {addMessage} from './redux/state';

addPost('asdsadada');

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} addMessage={addMessage}/>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
