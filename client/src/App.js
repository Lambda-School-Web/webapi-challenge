import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Project from "./Components/Project";
import ProjectList from "./Components/ProjectList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ProjectList} />
        <Route path="/:id" component={Project} />
      </BrowserRouter>
    </div>
  );
}

export default App;
