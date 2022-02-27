import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <div className="phoneWindow">
        <header>
          <h1>My Tour App</h1>
        </header>
        <Nav />
      </div>
    </div>
  );
}

export default App;
