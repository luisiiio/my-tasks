import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, NotFound } from "@pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
