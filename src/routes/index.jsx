import React from "react";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HeaderComponent from "../components/global/header";
import FilterSidebarComponent from "../components/global/filterSidebar";
import LoginComponent from "../components/global/login"
import MainComponent from "../components/global/main"
import { GlobalStyle, Container } from "./Navigation_style";

export default function Navigation() {
  return (
    <Router>
      <Route>
        <GlobalStyle />
        <FilterSidebarComponent />
        <Container>
          <HeaderComponent />
          <Switch>
            <Route path='/login' component={LoginComponent} />
            <Route path='/main' component={MainComponent} />
            <Redirect from="/" to="/login" />
          </Switch>
        </Container>
      </Route>
    </Router>
  );
}
