import "../styles/index.scss";
import React from "react";
import { Route, Switch } from "react-router";
import Landing from "./Landing";

const App = () => {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </main>
    </>
  );
};

export default App;
