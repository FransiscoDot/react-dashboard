import React from 'react';
import {Switch, Route} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

const Root = () => {
  return(
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Root;
