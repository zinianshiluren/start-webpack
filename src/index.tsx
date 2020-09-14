import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./containers/root";

var root = document.createElement("div");
document.body.appendChild(root);

render(<App />, root);
