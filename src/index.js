import React from 'react';
import {render} from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App";
import { createStore } from 'redux';
import profitData from "./reducers/profitReducers";

let store = createStore(profitData);

debugger;

render(
  <BrowserRouter>
    <App store={store}/>
  </BrowserRouter>,
  document.getElementById("app")
);
