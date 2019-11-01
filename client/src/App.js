import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/:id" component={Projects} />
      </BrowserRouter>
    </div>
  );
}

export default App;
