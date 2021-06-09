import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Footer, Header } from "./components";

import * as ROUTES from './constants/routes'
import { About, ContactUs, Home, Project, Projects, Services } from "./pages";


function App() {

  return (
    <Router>
      <Header />
    <Switch>
      <Route exact path={ROUTES.HOME}>
       <Home />
      </Route>
      <Route exact path={ROUTES.ABOUT}>
        <About />
      </Route>
      <Route exact path={ROUTES.SERVICES}>
        <Services />
      </Route>
      <Route exact path={ROUTES.PROJECTS}>
        <Projects />
      </Route>
      <Route exact path={ROUTES.PROJECT}>
        <Project />
      </Route>
      <Route exact path={ROUTES.CONTACT_US}>
        <ContactUs />
      </Route>
    </Switch>
 
    <Footer />
  </Router>
  );
}

export default App;
