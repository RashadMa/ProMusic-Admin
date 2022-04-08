import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Products from "../pages/products/Products";
import Brands from "../pages/brands/Brands";
import BrandPost from "../pages/brands/BrandPost";
import BrandPut from "../pages/brands/BrandPut";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/brands" component={Brands} />
      <Route exact path="/postbrand" component={BrandPost} />
      <Route exact path="/putbrand/:id" component={BrandPut} />
    </Switch>
  );
};

export default Routes;
