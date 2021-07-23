import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, NotFound } from "@pages";
import { DefaultTemplate } from "@templates";

const Router = () => {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;
