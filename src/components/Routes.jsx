import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/orders/Orders";
import Products from "../pages/products/Products";
import Brands from "../pages/brands/Brands";
import jwtDecode from "jwt-decode";
import BrandPost from "../pages/brands/BrandPost";
import BrandPut from "../pages/brands/BrandPut";
import Categories from "../pages/categories/Categories";
import CategoryPost from "../pages/categories/CategoryPost";
import CategoryPut from "../pages/categories/CategoryPut";
import Info from "../pages/info/Info";
import InfoPost from "../pages/info/InfoPost";
import InfoPut from "../pages/info/InfoPut";
import Settings from "../pages/settings/Settings";
import SettingPut from "../pages/settings/SettingPut";
import SubCategories from "../pages/subCategories/SubCategories";
import SubCategoryPost from "../pages/subCategories/SubCategoryPost";
import Sliders from "../pages/sliders/Sliders";
import SliderPost from "../pages/sliders/SliderPost";
import SliderPut from "../pages/sliders/SliderPut";
import Login from "../pages/auth/Login";
import SubCategoryPut from "../pages/subCategories/SubCategoryPut";
import ProductPost from "../pages/products/ProductPost";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ProductPut from "../pages/products/ProductPut";

const Routes = ({ isToken }) => {
  return (
    <Switch>
      {isToken ? (
        <>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/brands" component={Brands} />
          <Route exact path="/postbrand" component={BrandPost} />
          <Route exact path="/putbrand/:id" component={BrandPut} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/postcategory" component={CategoryPost} />
          <Route exact path="/putcategory/:id" component={CategoryPut} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/postinfo" component={InfoPost} />
          <Route exact path="/putinfo/:id" component={InfoPut} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/putsettings/:id" component={SettingPut} />
          <Route exact path="/subcategories" component={SubCategories} />
          <Route exact path="/postsubcategory" component={SubCategoryPost} />
          <Route exact path="/putsubcategory/:id" component={SubCategoryPut} />
          <Route exact path="/sliders" component={Sliders} />
          <Route exact path="/postslider" component={SliderPost} />
          <Route exact path="/putslider/:id" component={SliderPut} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/postproduct" component={ProductPost} />
          <Route exact path="/putproduct/:id" component={ProductPut} />
          <Route exact path="/orders" component={Orders} />
          <Redirect to="/dashboard" />
        </>
      ) : (
        <>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </>
      )}
    </Switch>
  );
};

export default Routes;
