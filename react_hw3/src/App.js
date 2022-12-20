import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Users from "./pages/Users";
import User from "./pages/User";
import CreateUser from "./pages/CreateUser";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/createuser">
            <CreateUser />
          </Route>
          <Route path="/:id">
            <User />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
