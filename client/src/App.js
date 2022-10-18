import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/auth" exact component={Auth}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
