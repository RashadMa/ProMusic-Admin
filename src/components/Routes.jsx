import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Products from "../pages/products/Products";
import Brands from "../pages/brands/Brands";
import BrandPost from "../pages/brands/BrandPost";
import BrandPut from "../pages/brands/BrandPut";
import Categories from "../pages/categories/Categories";
import CategoryPost from "../pages/categories/CategoryPost";
import CategoryPut from "../pages/categories/CategoryPut";
import Info from "../pages/info/Info";
import InfoPost from "../pages/info/InfoPost";
import InfoPut from "../pages/info/InfoPut";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/brands" component={Brands} />
      <Route exact path="/postbrand" component={BrandPost} />
      <Route exact path="/putbrand/:id" component={BrandPut} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/postcategory" component={CategoryPost} />
      <Route exact path="/putcategory/:id" component={CategoryPut} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/postinfo" component={InfoPost} />
      <Route exact path="/putinfo/:id" component={InfoPut} />
    </Switch>
  );
};

export default Routes;
