import "./App.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchResults />
          </Route>

          <Route path="/">
            {/* default for Home / */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
