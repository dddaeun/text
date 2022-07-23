import React from "react";
import "./App.css";
import TextEditor from "./components/TextEditor";
import Group53 from "./images/Group 53 copy.png";
import Group60 from "./images/Group 60 copy.png";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <img src={Group53} className="App-53"/> 
          <img src={Group60} className="App-60"/>
      </header>
      <div className="editor">
        <TextEditor />
      </div>
    </div>
  );
}

export default App
