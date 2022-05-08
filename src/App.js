import React, { useState } from "react";
import "./App.css";
import Dropdown from "./component/Dropdown";

function App() {
  const options = [
    "HTML",
    "CSS",
    "Javascript",
    "MongoDB",
    "Express",
    "React",
    "Node",
  ];
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
      <h1 className="heading">Akhil's Dropdown</h1>
      {/* dropdown imported */}
      <Dropdown
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;
