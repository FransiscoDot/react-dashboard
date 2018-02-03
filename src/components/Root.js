import React from 'react';
import {Switch, Route} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

const Root = () => {
  return(
    <Switch>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/" render={() => (
        <div style={{padding: "20px"}}>
          <h3>Go to http://localhost:3000/dashboard and navigate with sidebar</h3>
        </div>
      )} />
    </Switch>
  );
};

export default Root;
