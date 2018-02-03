import React from 'react';
import {Switch, Route} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

const Root = () => {
  return(
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
};

export default Root;
