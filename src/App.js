import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Vpgudd, Main } from "./components/main"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/vpgudd" component={Vpgudd}/>
          <Route path="/vpgudd/:id" component={Child} />
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}
