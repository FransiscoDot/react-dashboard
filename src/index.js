import React from 'react';
import {render} from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import configureStore, {history} from './store/configureStore';
import App from "./components/App";

const store = configureStore();

render(
  <BrowserRouter>
    <App store={store} history={history}/>
  </BrowserRouter>,
  document.getElementById("app")
);
