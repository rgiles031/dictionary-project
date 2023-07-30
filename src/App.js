import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What word do you want to look up?</h1>
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}

export default App;
