import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./home";
import Test from "./test";
import Event from "./event";
import Topics from "./Topics";

function wapperComponent(path, WrappedComponent) {
  return class extends React.Component<any, any> {
    componentDidMount() {
      try {
        if (
          window.hasOwnProperty("__bl") &&
          typeof window["__bl"].setPage === "function"
        ) {
          console.log("path", path);
          window["__bl"].setPage(path, true);
        }
      } catch (e) {
        console.error(e);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export class CusRoute extends React.Component<any, any> {
  public render() {
    return (
      <Route
        {...this.props}
        component={wapperComponent(this.props.path, this.props.component)}
      />
    );
  }
}

const Root = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
        <li>
          <Link to="/event">event</Link>
        </li>
        <li>
          <Link to="/topics">topics</Link>
        </li>
      </ul>
      <Switch>
        <CusRoute path="/home" component={Home} />
        <CusRoute path="/test" component={Test} />
        <CusRoute path="/event" component={Event} />
        <CusRoute path="/topics" component={Topics} />
      </Switch>
    </Router>
  );
};
export default Root;
