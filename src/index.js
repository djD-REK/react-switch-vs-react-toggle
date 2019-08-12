import React, { Component } from "react";
import ReactDOM from "react-dom";
import Switch from "react-switch";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import "./react-switchExample.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
