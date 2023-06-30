import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Who from "./components/Who";
import Project from "./components/Project";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Who />
        <Project />
        <About />
      </main>
    </>
  );
}

export default App;
