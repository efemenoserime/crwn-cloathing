import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
