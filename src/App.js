import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Vpgudd, Main, VpguddId } from "./components/main";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/vpgudd" component={Vpgudd} />
          <Route exact path="/vpgudd/:added_params" component={VpguddId} />
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}
