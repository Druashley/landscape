import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import HomePage from "./pages/homepage";
import ContactPage from "./pages/contactpage";
import ProjectsPage from "./pages/projectspage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    </div>
  );
}

export default App;
