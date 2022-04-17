import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Routes from "../Routes";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";

const Layout = () => {
  const [isToken, setToken] = React.useState();

  const themeReducer = useSelector((state) => state.ThemeReducer);
  const { token } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");
    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [token]);
  return (
    <Router>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            {token && <Sidebar {...props} />}
            <div className={isToken && "layout__content"}>
              {/* {token && <TopNav />} */}
              <div className="layout__content-main">
                <Routes isToken={token} />
              </div>
            </div>
          </div>
        )}
      />
    </Router>
  );
};

export default Layout;
