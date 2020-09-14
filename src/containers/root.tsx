import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import Test from "./test";
import Event from "./event";

const App = props => {
  return <div id="container">111</div>;
};
const Root = () => {
  return (
    <Router>
      <Route path="/" component={App}>
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/event" component={Event} />
      </Route>
    </Router>
  );
};
export default Root;
