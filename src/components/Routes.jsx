import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Products from "../pages/products/Products";
import Brands from "../pages/brands/Brands";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/products" component={Products} />
      <Route path="/brands" component={Brands} />
    </Switch>
  );
};

export default Routes;
